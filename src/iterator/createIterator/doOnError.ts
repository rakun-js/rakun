import nextResult from "../../nextResult"
import resultValue from "../../resultValue"
import { RakunNext } from "../../types"
import { RakunIterator } from "../interface"
import { createIterator } from "."

export const doOnError = <T>(nextFn: RakunNext<T>) => (handler: (error: any) => any): RakunIterator<T> => {
    return createIterator(() => {
        const next = nextFn()
        return (ctx) => {
            try {
                const item = next(ctx);
                if (nextResult.isPromise(item)) {
                    item.promise.then((p) => p.map(resultValue.fnDoOnError(handler)))
                }

                if (nextResult.isValues(item)) {
                    item.values.forEach(resultValue.fnDoOnError(handler))
                }
                return item;
            } catch (error) {
                handler(error)
                throw error;
            }
        }
    })
}