import { ErrorConstructor, RakunIteratorSource, RakunNext } from "../../types";
import { RakunIterator } from "../interface";
export declare const onErrorResume: <T>(nextFn: RakunNext<T>) => <E>(errorType: ErrorConstructor<E>, fn: (value: E) => RakunIteratorSource<T>) => RakunIterator<T>;
