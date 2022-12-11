import nextResult from "../nextResult"
import { RakunNextResult, RakunNextResultDone, RakunNextResultValues } from "../nextResult/interface"
import resultValue from "../resultValue"
import { RakunIteratorSource, ReturnUnzip } from "../types"
import { createIterator } from "./createIterator"
import { RakunIterator } from "./interface"



const nextResultToPromise = <T>(results: (RakunNextResult<T>)[]): Promise<(T | null)[]> => {
    return Promise.all(results.map(result => {
        if (nextResult.isValues(result)) {
            return Promise.resolve(resultValue.valueOrThrow(result.values[0]))
        } else if (nextResult.isPromise(result)) {
            return result.promise.then(value => resultValue.valueOrThrow(value[0]))
        } else {
            return Promise.resolve(null)
        }
    }))
}

const nextResultToValues = <T>(valueResults: (RakunNextResultDone | RakunNextResultValues<T>)[]): (T | null)[] => {
    return valueResults.map(resultValue.values)
}
export const zip = <R extends (RakunIteratorSource<any>)[]>(...iterators: R): RakunIterator<[...ReturnUnzip<R>]> => {

    return createIterator<[...ReturnUnzip<R>]>(() => {
        let finish = false
        let nextArray = iterators.map(iterator => iterator.iterator.next())
        return (ctx) => {
            if (!finish) {
                finish = true;
                let results = nextArray.map(next => next(ctx))
                let valueResults = results.filter(item => !nextResult.isPromise(item)) as (RakunNextResultValues<[...ReturnUnzip<R>]> | RakunNextResultDone)[]
                if (valueResults.length == results.length) {
                    var values = nextResultToValues(valueResults)
                    return nextResult.valuesFromArray([values as [...ReturnUnzip<R>]])
                } else {
                    var promise = nextResultToPromise(results)
                    return nextResult.promiseFromPromiseArray(promise.then(values => ([values as [...ReturnUnzip<R>]])))
                }

            }
            return nextResult.done()
        }
    });
}

