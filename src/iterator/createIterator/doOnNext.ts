import nextResult from "../../nextResult";
import resultValue from "../../resultValue";
import { RakunNext } from "../../types";
import { RakunIterator } from "../interface";
import { createIterator } from ".";

export const doOnNext = <T>(nextFn: RakunNext<T>) => (handler: (value: T) => any): RakunIterator<T> => {
    return createIterator(() => {
        let next = nextFn()
        return (ctx) => {
            let item = next(ctx);
            if (nextResult.isPromise(item)) {
                item.promise.then((p) => p.map(resultValue.fnDoOnNext(handler)))
            }

            if (nextResult.isValues(item)) {
                item.values.forEach(resultValue.fnDoOnNext(handler))
            }
            return item
        }
    })
}