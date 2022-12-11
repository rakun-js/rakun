import { RakunIteratorSource, ReturnUnzip } from "../../types";
import { RakunIterator } from "../interface";
import { RakunIteratorImpl } from "./createIterator";
export declare const zip: <T>(iterator: RakunIteratorImpl<T>) => <R extends RakunIteratorSource<any>[]>(...monoArray: R) => RakunIterator<[T, ...ReturnUnzip<R>]>;
