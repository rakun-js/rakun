import { RakunMono } from ".";
import { RakunContextManager } from "../context";
export declare const fromCallback: <T>(callback: (ctx: RakunContextManager) => T | Promise<T>) => RakunMono<T>;
