import { RakunMono } from "."
import iterator from "../iterator"
import { Void } from "../wrapped"
import { createMono } from "./createMono"

export const then = (): RakunMono<typeof Void> => {
    return createMono(iterator.then())
}
