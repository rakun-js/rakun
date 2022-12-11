import { RakunIteratorSource, RakunNext, ReturnUnzipWhen } from "../../types";
import { RakunIterator } from "../interface";
export declare const zipWhen: <T>(nextFn: RakunNext<T>) => <R extends ((value: T) => RakunIteratorSource<any>)[]>(...monoArrayFn: R) => RakunIterator<[T, ...ReturnUnzipWhen<R>]>;
