import { RakunNext } from "../../types";
import { RakunIterator } from "../interface";
export declare class RakunIteratorImpl<T> implements RakunIterator<T> {
    next: RakunNext<T>;
    constructor(next: RakunNext<T>);
    get iterator(): this;
    array: () => RakunIterator<T[]>;
    block: (ctx: import("../..").RakunContextManager) => T[] | Promise<T[]>;
    blockFirst: (ctx: import("../..").RakunContextManager) => T | Promise<T>;
    defaultIfEmpty: (value: T) => RakunIterator<T>;
    doOnError: (handler: (error: any) => any) => RakunIterator<T>;
    doOnNext: (handler: (value: T) => any) => RakunIterator<T>;
    filter: (fn: (value: T) => boolean) => RakunIterator<T>;
    flatFilter: (fn: (value: T) => import("../../types").RakunIteratorSource<boolean>) => RakunIterator<T>;
    flatPipe: <R>(fn: (value: T) => import("../../types").ValueOrPromise<import("../../types").RakunIteratorSource<R>>) => RakunIterator<R>;
    onErrorResume: <E>(errorType: import("../../types").ErrorConstructor<E>, fn: (value: E) => import("../../types").RakunIteratorSource<T>) => RakunIterator<T>;
    pipe: <R>(fn: (value: T) => import("../../types").ValueOrPromise<R>) => RakunIterator<R>;
    results: (ctx: import("../..").RakunContextManager) => import("../../resultValue/interface").RakunNextResultValue<T>[] | Promise<import("../../resultValue/interface").RakunNextResultValue<T>[]>;
    switchIfEmpty: (iterator: RakunIterator<T>) => RakunIterator<T>;
    then: <R>(source?: import("../../types").RakunIteratorSource<R> | undefined) => RakunIterator<typeof import("../..").Void> | RakunIterator<R>;
    thenReturn: <R>(value: R) => RakunIterator<R>;
    zip: <R extends import("../../types").RakunIteratorSource<any>[]>(...monoArray: R) => RakunIterator<[T, ...import("../../types").ReturnUnzip<R>]>;
    zipWhen: <R extends ((value: T) => import("../../types").RakunIteratorSource<any>)[]>(...monoArrayFn: R) => RakunIterator<[T, ...import("../../types").ReturnUnzipWhen<R>]>;
}
export declare const createIterator: <T>(next: RakunNext<T>) => RakunIterator<T>;
