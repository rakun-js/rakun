import { RakunNext } from "../../types"
import { RakunIterator } from "../interface"
import { empty } from "../empty"
import { just } from "../just"
import { zipWhen } from "./zipWhen"

export const filter = <T>(nextFn: RakunNext<T>) => (fn: (value: T) => boolean): RakunIterator<T> => {
    return zipWhen(nextFn)((value) => just(fn(value)))
        .flatPipe(([t, b]: [T, boolean]) => {
            if (b) {
                return just(t)
            }
            return empty()
        })
}