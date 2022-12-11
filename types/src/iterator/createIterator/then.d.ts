import { RakunIteratorSource, RakunNext } from "../../types";
import { Void } from "../../wrapped";
import { RakunIterator } from "../interface";
export declare const then: <T>(nextFn: RakunNext<T>) => <R>(source?: RakunIteratorSource<R> | undefined) => RakunIterator<typeof Void> | RakunIterator<R>;
