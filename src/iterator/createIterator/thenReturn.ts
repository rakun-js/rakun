import { RakunNext } from "../../types"
import { RakunIterator } from "../interface"
import { pipe } from "./pipe"


export const thenReturn = <T>(nextFn: RakunNext<T>) => <R>(value: R): RakunIterator<R> => {
    return pipe(nextFn)(() => {
        return value
    })
}