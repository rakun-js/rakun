import { RakunContextManager } from "../../context";
import { RakunNextResultPromise, RakunNextResultValues } from "../../nextResult/interface";
import { RakunNextResultValue } from "../../resultValue/interface";
import { RakunIteratorSource, RakunNext, ValueOrPromise } from "../../types";
import { RakunIterator } from "../interface";
export declare const toPromiseNextResultValue: <R>(nextIterator: RakunNextResultPromise<RakunIteratorSource<R>>, ctx: RakunContextManager) => Promise<RakunNextResultValue<R>[]>;
export declare const toValueOrPromiseArray: <R>(nextIterator: RakunNextResultValues<RakunIteratorSource<R>>, ctx: RakunContextManager) => (R[] | Promise<R[]>)[];
export declare const toValueOrPromise: <R>(item: RakunNextResultValue<RakunIteratorSource<R>>, ctx: RakunContextManager) => R[] | Promise<R[]>;
export declare const flatPipe: <T>(nextFn: RakunNext<T>) => <R>(fn: (value: T) => ValueOrPromise<RakunIteratorSource<R>>) => RakunIterator<R>;
