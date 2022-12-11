import { RakunNext, ValueOrPromise } from "../../types";
import { RakunIterator } from "../interface";
export declare const pipe: <T>(nextFn: RakunNext<T>) => <R>(fn: (value: T) => ValueOrPromise<R>) => RakunIterator<R>;
