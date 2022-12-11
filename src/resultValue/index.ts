import { RakunNextResultDone, RakunNextResultValues } from "../nextResult/interface";
import { RakunNextResultValue } from "./interface";


export class ResultValueStaticImpl {
    async itemsOrPromisesToNextResultPromise<R>(itemsOrPromises: (R[] | Promise<R[]>)[]): Promise<RakunNextResultValue<R>[]> {
        const array = await Promise.resolve(itemsOrPromises);
        const array_1 = await Promise.all(array.map(item => Promise.resolve(item)));
        return resultValue.fromArray(array_1.flat());
    }
    values<T>(result: RakunNextResultDone | RakunNextResultValues<T>): T | null {
        if (result.type == 'values' && result.values.length > 0) {
            return resultValue.valueOrThrow(result.values[0])
        } else {
            return null
        }
    }
    fromArray<T>(array: T[]): RakunNextResultValue<T>[] {
        return array.map(arr => ({ value: arr }))
    }
    fromValue<T>(arr: T): RakunNextResultValue<T> {
        return { value: arr }
    }
    fnDoOnNext<T>(fn: (value: T) => void): (r: RakunNextResultValue<T>) => void {
        return (r) => {
            if ('value' in r) {
                fn(r.value)
            }
        }

    }
    fnDoOnError<T>(fn: (value: T) => void): (r: RakunNextResultValue<T>) => void {
        return (r) => {
            if ('error' in r) {
                fn(r.error)
            }
        }
    }
    valueOrThrow<T>(r: RakunNextResultValue<T>): T {
        if ('error' in r)
            throw r.error
        else
            return r.value
    }
}
const resultValue = new ResultValueStaticImpl()
export default resultValue;