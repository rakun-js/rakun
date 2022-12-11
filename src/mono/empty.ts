import { iterator, RakunMono } from ".."
import { createMono } from "./createMono/createMono"

export const empty = <T>(): RakunMono<T> => {
    return createMono(iterator.empty())
}
