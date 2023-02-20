import { RakunContextManager } from "../../context";
import { RakunNext } from "../../types";
export declare const blockFirst: <T>(nextFn: RakunNext<T>) => (ctx: RakunContextManager) => T | Promise<T>;
