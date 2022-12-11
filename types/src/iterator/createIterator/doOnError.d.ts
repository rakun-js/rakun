import { RakunNext } from "../../types";
import { RakunIterator } from "../interface";
export declare const doOnError: <T>(nextFn: RakunNext<T>) => (handler: (error: any) => any) => RakunIterator<T>;
