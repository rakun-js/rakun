
import { RakunContextManager } from "../context/interface"
import { RakunFlux } from "../flux"
import { RakunIterator } from "../iterator"
import { ErrorConstructor, RakunIteratorSource, RakunMonoOrFlux, ReturnUnzip, ReturnUnzipWhen, ValueOrPromise } from "../types"
import { Void, WrappedValue_OPAQUE } from "../wrapped"

export interface RakunMono<T> extends RakunIteratorSource<T> {
    readonly [WrappedValue_OPAQUE]: 'mono'
    zip<R extends RakunMono<any>[]>(...monoArray: R): RakunMono<[T, ...ReturnUnzip<R>]>
    zipWhen<R extends ((value: T) => RakunMonoOrFlux<any>)[]>(...monoArrayFn: R): RakunMono<[T, ...ReturnUnzipWhen<R>]>
    pipe<R>(fn: (value: T) => ValueOrPromise<R>): RakunMono<R>
    flatPipe<R>(fn: (value: T) => ValueOrPromise<RakunMonoOrFlux<R>>): RakunMono<R>
    flatPipeMany<R>(fn: (value: T) => ValueOrPromise<RakunMonoOrFlux<R>>): RakunFlux<R>
    thenReturn<R>(value: R): RakunMono<R>
    then<Source extends RakunMonoOrFlux<any>>(source: Source): Source;
    then(): RakunMono<typeof Void>
    filter(fn: (value: T) => boolean): RakunMono<T>
    flatFilter(fn: (value: T) => RakunMonoOrFlux<boolean>): RakunMono<T>
    doOnNext(handler: (value: T) => any): RakunMono<T>
    doOnError(handler: (error: any) => any): RakunMono<T>
    onErrorResume<E>(errorType: ErrorConstructor<E>, fn: (value: E) => RakunMonoOrFlux<T>): RakunMono<T>
    switchIfEmpty(source: RakunMonoOrFlux<T>): RakunMono<T>
    defaultIfEmpty(value: T): RakunMono<T>
    blockFirst(contextManager?: RakunContextManager): Promise<T> | T
    block(contextManager?: RakunContextManager): Promise<T[]> | T[]
    iterator: RakunIterator<T>

}

export type RakunStaticMono = {
    fromCallback<T>(callback: (ctx: RakunContextManager) => T | Promise<T>): RakunMono<T>
    zip<T extends RakunMono<any>[]>(...monoArray: T): RakunMono<ReturnUnzip<T>>;
    just<T>(value: T): RakunMono<T>;
    then(): RakunMono<typeof Void>;
    empty<T>(): RakunMono<T>;
    error<T>(error: any): RakunMono<T>;
}

