
import resultValue from "../resultValue"
import { RakunNextResult, RakunNextResultDone, RakunNextResultPromise, RakunNextResultValues } from "./interface"
import { RakunNextResultValue } from "../resultValue/interface"

export class NextResultStaticImpl {
    isDone<R>(nextResult: RakunNextResult<R>): nextResult is RakunNextResultDone {
        return nextResult.type == 'done'
    }
    isPromise<R>(nextResult: RakunNextResult<R>): nextResult is RakunNextResultPromise<R> {
        return nextResult.type == 'promise'
    }
    isValues<R>(nextResult: RakunNextResult<R>): nextResult is RakunNextResultValues<R> {
        return nextResult.type == 'values'
    }
    done(): RakunNextResultDone {
        return {
            type: 'done'
        }
    }
    values<T>(values: RakunNextResultValue<T>[]): RakunNextResultValues<T> {
        return {
            type: 'values',
            values
        }
    }
    promise<R>(promise: Promise<RakunNextResultValue<R>[]>): RakunNextResultPromise<R> {
        return {
            type: 'promise',
            promise
        }
    }
    error<T>(...errors: any[]): RakunNextResultValues<T> {
        return this.values(errors.map(error => ({ error })))
    }
    valuesFromArray<T>(values: T[]): RakunNextResultValues<T> {
        return this.values(resultValue.fromArray(values))
    }
    promiseFromPromiseArray<T>(promise: Promise<T[]>): RakunNextResultPromise<T> {
        return this.promise(promise.then(array => resultValue.fromArray(array)))
    }
}

const nextResult = new NextResultStaticImpl();
export default nextResult