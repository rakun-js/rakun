import { RakunIteratorSource, RakunNext, ReturnUnzipWhen } from "../../types"
import { RakunIterator } from "../interface"
import { just } from "../just"
import { zip } from "../zip"
import { flatPipe } from "./flatPipe"

export const zipWhen = <T>(nextFn: RakunNext<T>) => <R extends ((value: T) => RakunIteratorSource<any>)[]>(...monoArrayFn: R): RakunIterator<[T, ...ReturnUnzipWhen<R>]> => {
    return flatPipe(nextFn)((v) => {
        return zip(just(v), ...monoArrayFn.map(fn => fn(v)))
    }) as RakunIterator<[T, ...ReturnUnzipWhen<R>]>
}