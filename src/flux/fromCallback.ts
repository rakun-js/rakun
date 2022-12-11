
import { RakunContextManager } from "../context";
import iterator from "../iterator";
import { isPromise } from "../utils";
import { createFlux } from "./createFlux";
import { RakunFlux } from "./interface";

export const fromCallback = <T>(callback: (ctx: RakunContextManager) => T[] | Promise<T[]>): RakunFlux<T> => {
    return createFlux<T>(iterator.fromCallback(c => {
        let promiseOrValue = callback(c)
        if (isPromise(promiseOrValue)) {
            return promiseOrValue
        } else {
            return promiseOrValue
        }
    }));
}
