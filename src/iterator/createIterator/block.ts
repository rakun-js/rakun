import { RakunContextManager } from "../../context"
import resultValue from "../../resultValue"
import { RakunNext } from "../../types"
import { isNotPromise } from "../../utils"
import { results } from "./results"

export const block = <T>(nextFn: RakunNext<T>) => (ctx: RakunContextManager): Promise<T[]> | T[] => {
    const valuesOrPromiseResults = results(nextFn)(ctx)
    if (isNotPromise(valuesOrPromiseResults)) {
        const valuesResults = valuesOrPromiseResults
        return valuesResults.map(resultValue.valueOrThrow)
    } else {
        const promiseResults = valuesOrPromiseResults
        return promiseResults.then(valuesResults => {
            return valuesResults.map(resultValue.valueOrThrow)
        })
    }
}