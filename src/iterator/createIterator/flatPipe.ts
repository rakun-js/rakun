import { RakunContextManager } from "../../context";
import nextResult from "../../nextResult";
import { RakunNextResultPromise, RakunNextResultValues } from "../../nextResult/interface";
import resultValue from "../../resultValue";
import { RakunNextResultValue } from "../../resultValue/interface";
import { RakunIteratorSource, RakunNext, ValueOrPromise } from "../../types";
import { isNotPromise } from "../../utils";
import { RakunIterator } from "../interface";
import { createIterator } from ".";
import { pipe } from "./pipe";

export const toPromiseNextResultValue = <R>(nextIterator: RakunNextResultPromise<RakunIteratorSource<R>>, ctx: RakunContextManager): Promise<RakunNextResultValue<R>[]> => {
    return nextIterator.promise.then(
        array => Promise.all(
            array.map(
                item => Promise.resolve(toValueOrPromise(item, ctx))
            )
        ).then(array => resultValue.fromArray(array.flat()))
    )

}
export const toValueOrPromiseArray = <R>(nextIterator: RakunNextResultValues<RakunIteratorSource<R>>, ctx: RakunContextManager): (R[] | Promise<R[]>)[] => {
    return nextIterator.values.map(
        item => toValueOrPromise(item, ctx)
    )
}

export const toValueOrPromise = <R>(item: RakunNextResultValue<RakunIteratorSource<R>>, ctx: RakunContextManager): R[] | Promise<R[]> => {
    return resultValue.valueOrThrow(item).iterator.block(ctx)
}

export const flatPipe = <T>(nextFn: RakunNext<T>) => <R>(fn: (value: T) => ValueOrPromise<RakunIteratorSource<R>>): RakunIterator<R> => {
    return createIterator<R>(() => {
        let nextIteratorFn = pipe(nextFn)(fn).iterator.next();
        return (ctx) => {
            let nextIterator = nextIteratorFn(ctx)
            if (nextResult.isDone(nextIterator)) {
                return nextIterator
            } else if (nextResult.isPromise(nextIterator)) {
                return nextResult.promise(toPromiseNextResultValue(nextIterator, ctx))
            } else {
                const itemsOrPromises = toValueOrPromiseArray(nextIterator, ctx)
                const items = itemsOrPromises.filter(isNotPromise)
                if (items.length == itemsOrPromises.length) {
                    return nextResult.valuesFromArray(items.flat())
                } else {
                    return nextResult.promise(resultValue.itemsOrPromisesToNextResultPromise(itemsOrPromises))
                }
            }
        }
    })
}
