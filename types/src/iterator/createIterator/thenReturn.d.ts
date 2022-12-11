import { RakunNext } from "../../types";
import { RakunIterator } from "../interface";
export declare const thenReturn: <T>(nextFn: RakunNext<T>) => <R>(value: R) => RakunIterator<R>;
