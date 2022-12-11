import { RakunMono } from "..";
import { RakunContextManager } from "../../context";
import { RakunContextManagerImpl } from "../../context/manager";
import { RakunFlux } from "../../flux";
import { createFlux } from "../../flux/createFlux";
import { RakunIterator } from "../../iterator";
import { ErrorConstructor, RakunMonoOrFlux, ReturnUnzip, ReturnUnzipWhen, ValueOrPromise } from "../../types";
import { Void, WrappedValue_OPAQUE } from "../../wrapped";



class RakunMonoImpl<T> implements RakunMono<T>  {
    readonly [WrappedValue_OPAQUE] = "mono";
    constructor(public iterator: RakunIterator<T>) {
    }

    flatPipeMany<R>(fn: (value: T) => ValueOrPromise<RakunMonoOrFlux<R>>): RakunFlux<R> {
        return createFlux(this.iterator.flatPipe(fn))
    }
    then<Source extends RakunMonoOrFlux<any>>(source?: Source): Source | RakunMono<typeof Void> {
        if (source)
            if (source[WrappedValue_OPAQUE] == 'flux') {
                return createFlux(this.iterator.then(source)) as any
            }
            else {
                return createMono(this.iterator.then(source))
            }
        else
            return createMono(this.iterator.then())
    }

    onErrorResume<E>(errorType: ErrorConstructor<E>, fn: (value: E) => RakunMonoOrFlux<T>): RakunMono<T> {
        return createMono(this.iterator.onErrorResume(errorType, fn))
    }
    doOnNext(handler: (value: T) => any): RakunMono<T> {
        return createMono(this.iterator.doOnNext(handler))
    }
    doOnError(handler: (error: any) => any): RakunMono<T> {
        return createMono(this.iterator.doOnError(handler))
    }
    switchIfEmpty(source: RakunMonoOrFlux<any>): RakunMono<T> {
        return createMono(this.iterator.switchIfEmpty(source))
    }
    defaultIfEmpty(value: T): RakunMono<T> {
        return createMono(this.iterator.defaultIfEmpty(value))
    }
    zipWhen<R extends ((value: T) => RakunMonoOrFlux<any>)[]>(...monoArrayFn: R): RakunMono<[T, ...ReturnUnzipWhen<R>]> {
        return createMono<any>(this.iterator.zipWhen(...monoArrayFn))
    }
    zip<R extends RakunMono<any>[]>(...monoArray: R): RakunMono<[T, ...ReturnUnzip<R>]> {
        return createMono<any>(this.iterator.zip(...monoArray))
    }
    pipe<R>(fn: (value: T) => ValueOrPromise<R>): RakunMono<R> {
        return createMono<R>(this.iterator.pipe<R>(fn))
    }
    flatPipe<R>(fn: (value: T) => ValueOrPromise<RakunMonoOrFlux<R>>): RakunMono<R> {
        return createMono(this.iterator.flatPipe(fn))
    }
    thenReturn<R>(value: R): RakunMono<R> {
        return createMono(this.iterator.thenReturn(value))
    }
    filter(fn: (value: T) => boolean): RakunMono<T> {
        return createMono(this.iterator.filter(fn))
    }
    flatFilter(fn: (value: T) => RakunMonoOrFlux<boolean>): RakunMono<T> {
        return createMono(this.iterator.flatFilter(fn))
    }
    blockFirst(contextManager: RakunContextManager): T | Promise<T> {
        return this.iterator.blockFirst(contextManager ?? new RakunContextManagerImpl());
    }
    block(contextManager: RakunContextManager): T[] | Promise<T[]> {
        return this.iterator.block(contextManager ?? new RakunContextManagerImpl())
    }
}



export const createMono = <T>(iterator: RakunIterator<T>): RakunMono<T> => {
    return new RakunMonoImpl(iterator);
}