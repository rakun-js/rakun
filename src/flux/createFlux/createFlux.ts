
import { RakunMono, Void, WrappedValue_OPAQUE } from "../..";
import { RakunContextManager } from "../../context";
import { RakunContextManagerImpl } from "../../context/manager";
import { RakunIterator } from "../../iterator";
import { createMono } from "../../mono/createMono/createMono";
import { ErrorConstructor, RakunMonoOrFlux, ReturnUnzip, ReturnUnzipWhen, ValueOrPromise } from "../../types";
import { RakunFlux } from "../interface";


class RakunFluxImpl<T> implements RakunFlux<T>{
    constructor(public iterator: RakunIterator<T>) {
    }
    [WrappedValue_OPAQUE]: "flux" = 'flux';
    then<Source extends RakunMonoOrFlux<any>>(source?: Source): Source | RakunMono<typeof Void> {
        if (source)
            if (source[WrappedValue_OPAQUE] == 'mono') {
                return createMono(this.iterator.then(source)) as any
            }
            else {
                return createFlux(this.iterator.then(source)) as any
            }
        else
            return createMono(this.iterator.then()) as any
    }
    array(): RakunMono<T[]> {
        return createMono(this.iterator.array());
    }
    switchIfEmpty(source: RakunMonoOrFlux<any>): RakunFlux<T> {
        return createFlux(this.iterator.switchIfEmpty(source))
    }
    defaultIfEmpty(value: T): RakunFlux<T> {
        return createFlux(this.iterator.defaultIfEmpty(value))
    }

    onErrorResume<E>(errorType: ErrorConstructor<E>, fn: (value: E) => RakunMonoOrFlux<T>): RakunFlux<T> {
        return createFlux(this.iterator.onErrorResume(errorType, fn))
    }
    doOnNext(handler: (value: T) => any): RakunFlux<T> {
        return createFlux(this.iterator.doOnNext(handler))
    }
    doOnError(handler: (error: any) => any): RakunFlux<T> {
        return createFlux(this.iterator.doOnError(handler))
    }

    zipWhen<R extends ((value: T) => RakunMonoOrFlux<any>)[]>(...monoArrayFn: R): RakunFlux<[T, ...ReturnUnzipWhen<R>]> {
        return createFlux<any>(this.iterator.zipWhen(...monoArrayFn))
    }
    zip<R extends RakunMono<any>[]>(...monoArray: R): RakunFlux<[T, ...ReturnUnzip<R>]> {
        return createFlux<any>(this.iterator.zip(...monoArray))
    }
    pipe<R>(fn: (value: T) => ValueOrPromise<R>): RakunFlux<R> {
        return createFlux<R>(this.iterator.pipe<R>(fn))
    }
    flatPipe<R>(fn: (value: T) => ValueOrPromise<RakunMonoOrFlux<R>>): RakunFlux<R> {
        return createFlux(this.iterator.flatPipe(fn))
    }

    filter(fn: (value: T) => boolean): RakunFlux<T> {
        return createFlux(this.iterator.filter(fn))
    }
    flatFilter(fn: (value: T) => RakunMonoOrFlux<boolean>): RakunFlux<T> {
        return createFlux(this.iterator.flatFilter(fn))
    }
    thenReturn<R>(value: R): RakunFlux<R> {
        return createFlux(this.iterator.thenReturn(value))
    }

    blockFirst(contextManager?: RakunContextManager): T | Promise<T> {
        return this.iterator.blockFirst(contextManager ?? new RakunContextManagerImpl());
    }
    block(contextManager: RakunContextManager): T[] | Promise<T[]> {
        return this.iterator.block(contextManager ?? new RakunContextManagerImpl())
    }

}



export const createFlux = <T>(iterator: RakunIterator<T>): RakunFlux<T> => {
    return new RakunFluxImpl<T>(iterator);
}