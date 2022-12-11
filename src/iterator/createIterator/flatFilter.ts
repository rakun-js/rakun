
import { RakunIteratorSource, RakunNext } from "../../types"
import { RakunIterator } from "../interface"
import { empty } from "../empty"
import { just } from "../just"
import { zipWhen } from "./zipWhen"

export const flatFilter = <T>(nextFn: RakunNext<T>) => (fn: (value: T) => RakunIteratorSource<boolean>): RakunIterator<T> => {
    return zipWhen<T>(nextFn)(fn)
        .flatPipe(([t, b]: [T, boolean]) => {
            if (b) {
                return just(t)
            }
            return empty()
        })
}