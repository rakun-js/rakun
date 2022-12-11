import nextResult from "../../nextResult"
import { RakunNextResultPromise, RakunNextResultValues } from "../../nextResult/interface"
import resultValue from "../../resultValue"
import { RakunNext } from "../../types"
import { isNotPromise } from "../../utils"
import { RakunIterator } from "../interface"
import { block } from "./block"
import { createIterator } from "."

export const fromPromiseOrValues = <T>(promiseOrValues: T[] | Promise<T[]>) => {
    if (isNotPromise(promiseOrValues)) {
        return nextResult.values(resultValue.fromArray(promiseOrValues)) as RakunNextResultValues<T>
    } else {
        return nextResult.promise(promiseOrValues.then(array => resultValue.fromArray(array))) as RakunNextResultPromise<T>
    }
}
export const switchIfEmpty = <T>(nextFn: RakunNext<T>) => (iterator: RakunIterator<T>): RakunIterator<T> => {
    return createIterator<T>(() => {
        let finish = false
        return (ctx) => {
            if (!finish) {
                finish = true
                let item = block(nextFn)(ctx)
                if (isNotPromise(item)) {
                    if (item.length == 0) {
                        const promiseOrValues = iterator.block(ctx)
                        return fromPromiseOrValues(promiseOrValues);
                    } else {
                        return nextResult.valuesFromArray(item)
                    }
                } else {
                    const promise = item.then(v => {
                        if (v.length == 0) {
                            return Promise.resolve(iterator.block(ctx))
                        }
                        return v
                    })
                    return nextResult.promiseFromPromiseArray(promise)
                }
            }

            return nextResult.done()
        }
    })
}