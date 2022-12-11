import { RakunNext } from "../../types";
import { RakunIterator } from "../interface";
export declare const array: <T>(nextFn: RakunNext<T>) => () => RakunIterator<T[]>;
