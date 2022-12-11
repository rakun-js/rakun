import { RakunContextManager } from "../context";
import { RakunFlux } from "./interface";
export declare const fromCallback: <T>(callback: (ctx: RakunContextManager) => T[] | Promise<T[]>) => RakunFlux<T>;
