
import { RakunContextManager } from "../context/interface";
import { RakunMono } from "../mono";
import { ErrorConstructor, RakunIteratorSource, RakunMonoOrFlux, ReturnUnzipWhen, UnpackArrayType, ValueOrPromise } from "../types";
import { Void, WrappedValue_OPAQUE } from "../wrapped";


export type RakunStaticFlux = {
    just<T extends any[]>(...monoArray: T): RakunFlux<UnpackArrayType<T>>
    fromArray<R>(value: R[]): RakunFlux<R>
    fromCallback<T>(callback: (ctx: RakunContextManager) => T[] | Promise<T[]>): RakunFlux<T>
}
export interface RakunFlux<T> extends RakunIteratorSource<T> {
    readonly [WrappedValue_OPAQUE]: 'flux'
    then<Source extends RakunMonoOrFlux<any>>(source: Source): Source;
    then(): RakunMono<typeof Void>
    zipWhen<R extends ((value: T) => RakunMonoOrFlux<any>)[]>(...monoArrayFn: R): RakunFlux<[T, ...ReturnUnzipWhen<R>]>
    pipe<R>(fn: (value: T) => ValueOrPromise<R>): RakunFlux<R>
    filter(fn: (value: T) => boolean): RakunFlux<T>
    flatFilter(fn: (value: T) => RakunMonoOrFlux<boolean>): RakunFlux<T>
    flatPipe<R>(fn: (value: T) => ValueOrPromise<RakunMonoOrFlux<R>>): RakunFlux<R>
    array(): RakunMono<T[]>
    doOnNext(handler: (value: T) => any): RakunFlux<T>
    doOnError(handler: (error: any) => any): RakunFlux<T>
    onErrorResume<E>(errorType: ErrorConstructor<E>, fn: (value: E) => RakunMonoOrFlux<T>): RakunFlux<T>
    switchIfEmpty(source: RakunMonoOrFlux<any>): RakunFlux<T>
    defaultIfEmpty(value: T): RakunFlux<T>
    blockFirst(contextManager?: RakunContextManager): T | Promise<T>
    block(contextManager?: RakunContextManager): Promise<T[]> | T[]

} 