import { RakunIteratorSource, ReturnUnzip } from "../types";
import { RakunIterator } from "./interface";
export declare const zip: <R extends RakunIteratorSource<any>[]>(...iterators: R) => RakunIterator<[...ReturnUnzip<R>]>;
