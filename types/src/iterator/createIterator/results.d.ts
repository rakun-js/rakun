import { RakunContextManager } from "../../context";
import { RakunNextResultValue } from "../../resultValue/interface";
import { RakunNext } from "../../types";
export declare const results: <T>(nextFn: RakunNext<T>) => (ctx: RakunContextManager) => RakunNextResultValue<T>[] | Promise<RakunNextResultValue<T>[]>;
