import { RakunContextManager } from "../../context";
import nextResult from "../../nextResult";
import { RakunNextResult, RakunNextResultPromise, RakunNextResultValues } from "../../nextResult/interface";
import { RakunNextResultValue } from "../../resultValue/interface";
import { RakunNext, ValueOrPromise } from "../../types";
import { isNotPromise } from "../../utils";
import { RakunIterator } from "../interface";
import { createIterator } from ".";


const fnMap = <T, R>(fn: (value: T) => R): (r: RakunNextResultValue<T>) => RakunNextResultValue<R> => {
    return (r) => {
        try {
            if ('value' in r) {
                return {
                    value: fn(r.value)
                }
            } else {
                return r;
            }
        } catch (e) {
            return {
                error: e
            }
        }
    }
}
const promiseFnMap = <T, R>(item: RakunNextResultPromise<T>, fn: (value: T) => ValueOrPromise<R>): RakunNextResultPromise<R> => {
    return nextResult.promise(item.promise.then(array => array.map(fnMap(fn)))
        .then(array => {
            return resolveValueOrPromise(array)
        }))
}


const resolveValueOrPromise = <R>(array: RakunNextResultValue<ValueOrPromise<R>>[]): RakunNextResultValue<R>[] | Promise<RakunNextResultValue<R>[]> => {
    const array2 = array.filter(item => {
        if ('value' in item) {
            return isNotPromise(item.value)
        }
        return true;
    });
    if (array.length == array2.length) {
        return array.map(item => {
            if ('value' in item) {
                return {
                    value: item.value as R
                }
            } else {

                return item;
            }
        });
    } else {
        return Promise.all(array.map(async item => {
            try {
                if ('value' in item) {
                    return {
                        value: await item.value
                    }
                } else {
                    return item;
                }
            } catch (error) {
                return {
                    error
                }
            }
        }));
    }
}


const valuesFnMap = <T, R>(item: RakunNextResultValues<T>, fn: (value: T) => ValueOrPromise<R>): RakunNextResultValues<R> | RakunNextResultPromise<R> => {
    const promiseOrValue = resolveValueOrPromise(item.values.map(fnMap(fn)))
    if (isNotPromise(promiseOrValue)) {
        return nextResult.values(promiseOrValue)
    } else {
        return nextResult.promise(promiseOrValue)
    }
}

export const pipe = <T>(nextFn: RakunNext<T>) => <R>(fn: (value: T) => ValueOrPromise<R>): RakunIterator<R> => {
    return createIterator<R>(() => {
        let next: (ctx: RakunContextManager) => RakunNextResult<T> = nextFn();
        return (ctx) => {
            let item = next(ctx)
            if (nextResult.isDone(item)) {
                return item
            } else if (nextResult.isPromise(item)) {

                return promiseFnMap(item, fn)
            } else {
                return valuesFnMap(item, fn)
            }
        }
    })
}
