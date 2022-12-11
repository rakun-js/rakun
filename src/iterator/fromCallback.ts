import { RakunContextManager } from "../context";
import nextResult from "../nextResult";
import resultValue from "../resultValue";
import { isNotPromise } from "../utils";
import { createIterator } from "./createIterator";
import { RakunIterator } from "./interface";


export const fromCallback = <T>(callback: (ctx: RakunContextManager) => Promise<T[]> | T[]): RakunIterator<T> => {
    return createIterator<T>(() => {
        let finish = false
        return (ctx) => {
            if (!finish) {
                finish = true;
                const promiseOrValues = callback(ctx);
                if (isNotPromise(promiseOrValues)) {
                    return nextResult.valuesFromArray(promiseOrValues)
                }
                return nextResult.promise(promiseOrValues.then(arr => resultValue.fromArray(arr)))
            }
            return nextResult.done()
        }
    });
}