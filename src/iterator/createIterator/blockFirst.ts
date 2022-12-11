import { RakunContextManager } from "../../context";
import nextResult from "../../nextResult";
import resultValue from "../../resultValue";
import { RakunNext } from "../../types";

export const blockFirst = <T>(nextFn: RakunNext<T>) => (ctx: RakunContextManager): T | Promise<T> => {
    let next = nextFn();
    let item = next(ctx)
    if (nextResult.isPromise(item)) {
        return item.promise.then(aar1 => aar1[0] ? resultValue.valueOrThrow(aar1[0]) : null as T)
    } else if (nextResult.isValues(item)) {
        return item.values[0] ? resultValue.valueOrThrow(item.values[0]) : null as T
    } else {
        return null as T
    }
}