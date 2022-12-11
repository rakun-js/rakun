
import { Void } from "../wrapped"
import { RakunIterator } from "./interface"
import { just } from "./just"

export const then = (): RakunIterator<typeof Void> => {
    return just(Void)
}