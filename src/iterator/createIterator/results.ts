import { RakunContextManager } from "../../context"
import nextResult from "../../nextResult"
import { RakunNextResultValue } from "../../resultValue/interface"
import { RakunNext } from "../../types"
import { isNotPromise } from "../../utils"

export const results = <T>(nextFn: RakunNext<T>) => (ctx: RakunContextManager): Promise<RakunNextResultValue<T>[]> | RakunNextResultValue<T>[] => {
    let valuesOrPromise: (Promise<RakunNextResultValue<T>[]> | RakunNextResultValue<T>[]) = []
    let next = nextFn()
    let item = next(ctx)
    while (!nextResult.isDone(item)) {
        if (isNotPromise(valuesOrPromise)) {
            const values: RakunNextResultValue<T>[] = valuesOrPromise
            if (nextResult.isValues(item)) {
                valuesOrPromise = [...values, ...item.values]
            } else if (nextResult.isPromise(item)) {
                valuesOrPromise = item.promise.then(aar => ([...values, ...aar]))
            }
        } else {
            const promise: Promise<RakunNextResultValue<T>[]> = valuesOrPromise
            if (nextResult.isValues(item)) {
                const values = item.values
                valuesOrPromise = promise.then(array => [...array, ...values])
            } else if (nextResult.isPromise(item)) {
                const promise2 = item.promise
                valuesOrPromise =Promise.all([item.promise,promise2])
                            .then(arr=>arr.flat())
            }
        }
        item = next(ctx)
    }
    return valuesOrPromise;
}