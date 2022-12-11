import { RakunNext } from "../../types";
import { RakunIterator } from "../interface";
export declare const doOnNext: <T>(nextFn: RakunNext<T>) => (handler: (value: T) => any) => RakunIterator<T>;
