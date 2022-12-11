import { RakunIteratorSource, RakunNext } from "../../types";
import { RakunIterator } from "../interface";
export declare const flatFilter: <T>(nextFn: RakunNext<T>) => (fn: (value: T) => RakunIteratorSource<boolean>) => RakunIterator<T>;
