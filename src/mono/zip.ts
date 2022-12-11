import { RakunMono } from "."
import { iterator } from ".."
import { ReturnUnzip } from "../types"
import { createMono } from "./createMono"

export const zip = <R extends RakunMono<any>[]>(...monoArray: R): RakunMono<[...ReturnUnzip<R>]> => {
    return createMono<any>(iterator.zip(...monoArray))
}