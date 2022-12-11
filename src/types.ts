
import { RakunContextManager } from "./context"
import { RakunFlux } from "./flux"
import { RakunIterator } from "./iterator"
import { RakunMono } from "./mono"
import { RakunNextResult } from "./nextResult/interface"


export interface RakunIteratorSource<T> {
    iterator: RakunIterator<T>
}

export type ReturnUnzip<T> = { [K in keyof T]: T[K] extends RakunIteratorSource<infer R> ? R : never }
export type ReturnUnzipWhen<T> = { [K in keyof T]: [K] extends (value: any) => RakunIteratorSource<infer R> ? R : never }
export type Unzip<T, R extends RakunIteratorSource<any>[]> = [T, ...ReturnUnzip<R>]


export type RakunNext<T> = () => (ctx: RakunContextManager) => RakunNextResult<T>
export type RakunContextManagerCallback<T> = {
    (contextManager: RakunContextManager): T
}
export type RakunMonoOrFlux<R> = RakunMono<R> | RakunFlux<R>

export type ValueOrPromise<R> = Promise<R> | R


export type UnpackArrayType<T> = T extends (infer R)[] ? R : T;
export type MergeTuple<A extends any[], B extends any[]> = [...A, ...B];

export interface ErrorConstructor<T> {
    new(...a: any): T;
}
