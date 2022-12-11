import { UnpackArrayType } from "../types";
import { RakunFlux } from "./interface";
export declare const just: <T extends any[]>(...values: T) => RakunFlux<UnpackArrayType<T>>;
