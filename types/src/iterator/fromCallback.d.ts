import { RakunContextManager } from "../context";
import { RakunIterator } from "./interface";
export declare const fromCallback: <T>(callback: (ctx: RakunContextManager) => T[] | Promise<T[]>) => RakunIterator<T>;
