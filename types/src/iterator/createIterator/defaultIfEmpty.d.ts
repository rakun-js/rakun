import { RakunNext } from "../../types";
import { RakunIterator } from "../interface";
export declare const defaultIfEmpty: <T>(nextFn: RakunNext<T>) => (value: T) => RakunIterator<T>;
