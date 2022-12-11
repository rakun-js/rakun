import { RakunIteratorSource, ReturnUnzip } from "../../types"
import { RakunIterator } from "../interface"
import { zip as zipStatic } from "../zip"
import { RakunIteratorImpl } from "./createIterator"

export const zip = <T>(iterator: RakunIteratorImpl<T>) => <R extends RakunIteratorSource<any>[]>(...monoArray: R): RakunIterator<[T, ...ReturnUnzip<R>]> => {
    return zipStatic(iterator, ...monoArray) as RakunIterator<[T, ...ReturnUnzip<R>]>
}