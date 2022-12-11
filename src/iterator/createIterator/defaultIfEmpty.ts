import { RakunNext } from "../../types"
import { RakunIterator } from "../interface"
import { just } from "../just"
import { switchIfEmpty } from "./switchIfEmpty"

export const defaultIfEmpty = <T>(nextFn: RakunNext<T>) => (value: T): RakunIterator<T> => {
    return switchIfEmpty(nextFn)(just(value))
}
