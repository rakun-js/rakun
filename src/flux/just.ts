import iterator from "../iterator";
import { UnpackArrayType } from "../types";
import { createFlux } from "./createFlux";
import { RakunFlux } from "./interface";

export const just = <T extends any[]>(...values: T): RakunFlux<UnpackArrayType<T>> => {
    return createFlux(iterator.just(...values));
}