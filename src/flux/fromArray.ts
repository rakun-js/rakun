import { RakunFlux } from "./interface"
import { just } from "./just"

export const fromArray = <R>(value: R[]): RakunFlux<R> => {
    return just(...value)
}