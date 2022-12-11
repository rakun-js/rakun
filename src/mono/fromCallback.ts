import { RakunMono } from ".";
import { RakunContextManager } from "../context";
import iterator from "../iterator";
import { isPromise } from "../utils";
import { createMono } from "./createMono";

export const fromCallback = <T>(callback: (ctx: RakunContextManager) => T | Promise<T>): RakunMono<T> => {
    return createMono<T>(iterator.fromCallback(c => {
        let promiseOrValue = callback(c)
        if (isPromise(promiseOrValue)) {
            return promiseOrValue.then(p => [p])
        } else {
            return [promiseOrValue]
        }
    }));
}