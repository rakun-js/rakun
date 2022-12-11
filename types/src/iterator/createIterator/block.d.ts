import { RakunContextManager } from "../../context";
import { RakunNext } from "../../types";
export declare const block: <T>(nextFn: RakunNext<T>) => (ctx: RakunContextManager) => T[] | Promise<T[]>;
