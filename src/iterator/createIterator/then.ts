import { RakunIteratorSource, RakunNext } from "../../types"
import { Void } from "../../wrapped"
import { RakunIterator } from "../interface"
import { flatPipe } from "./flatPipe"
import { pipe } from "./pipe"


export const then = <T>(nextFn: RakunNext<T>) => <R>(source?: RakunIteratorSource<R>): RakunIterator<typeof Void> | RakunIterator<R> => {
    if (!source) {
        return pipe(nextFn)(() => {
            return Void
        })
    }
    return flatPipe(nextFn)<R>(() => {
        return source
    })
}