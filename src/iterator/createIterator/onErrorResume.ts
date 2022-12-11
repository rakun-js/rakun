import { createIterator } from ".";
import { RakunContextManager } from "../../context";
import nextResult from "../../nextResult";
import resultValue from "../../resultValue";
import { RakunNextResultValue } from "../../resultValue/interface";
import { ErrorConstructor, RakunIteratorSource, RakunNext } from "../../types";
import { isNotPromise } from "../../utils";
import { RakunIterator } from "../interface";


const returnError = <E, T>(errorType: ErrorConstructor<E>, fn: (value: E) => RakunIteratorSource<T>, error: any, ctx: RakunContextManager) => {
    if (error instanceof errorType) {
        const rr = fn(error).iterator.next()(ctx)
        if (nextResult.isValues(rr)) {
            return rr
        }
        if (nextResult.isPromise(rr)) {
            return rr
        }
    }
    throw error;
}
const mapFn = <E, T>(errorType: ErrorConstructor<E>, fn: (value: E) => RakunIteratorSource<T>, ctx: RakunContextManager) => (r: RakunNextResultValue<T>) => {
    try {
        resultValue.valueOrThrow(r)
        return r
    } catch (error) {
        var item = returnError(errorType, fn, error, ctx)
        if (nextResult.isPromise(item)) {
            return item.promise.then(values => values[0])
        } else if (nextResult.isValues(item)) {
            return item.values[0]
        }
        throw error
    }
}
export const onErrorResume = <T>(nextFn: RakunNext<T>) =>
    <E>(errorType: ErrorConstructor<E>, fn: (value: E) => RakunIteratorSource<T>): RakunIterator<T> => {
        return createIterator(() => {
            let next = nextFn();
            return (ctx) => {
                try {
                    let item = next(ctx);
                    if (nextResult.isPromise(item)) {
                        const promise = item.promise.then(values => Promise.all(
                            values.map(mapFn(errorType, fn, ctx))
                                .map(p => Promise.resolve(p))
                        ));
                        return nextResult.promise(promise)
                    } else if (nextResult.isValues(item)) {
                        const promisesOrValues = item.values.map(mapFn(errorType, fn, ctx));
                        const values = promisesOrValues.filter(isNotPromise)
                        if (values.length == promisesOrValues.length) {
                            return nextResult.values(values)
                        } else {
                            const promise = Promise.resolve(promisesOrValues).then((e) => Promise.all(e.map(ee => Promise.resolve(ee))));
                            return nextResult.promise(promise)
                        }
                    } else {

                        return item
                    }
                } catch (error) {
                    return returnError(errorType, fn, error, ctx)
                }
            }
        })
    }

