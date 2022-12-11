import { RakunNextResultPromise, RakunNextResultValues } from "../../nextResult/interface";
import { RakunNext } from "../../types";
import { RakunIterator } from "../interface";
export declare const fromPromiseOrValues: <T>(promiseOrValues: T[] | Promise<T[]>) => RakunNextResultValues<T> | RakunNextResultPromise<T>;
export declare const switchIfEmpty: <T>(nextFn: RakunNext<T>) => (iterator: RakunIterator<T>) => RakunIterator<T>;
