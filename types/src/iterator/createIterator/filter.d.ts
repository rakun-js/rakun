import { RakunNext } from "../../types";
import { RakunIterator } from "../interface";
export declare const filter: <T>(nextFn: RakunNext<T>) => (fn: (value: T) => boolean) => RakunIterator<T>;
