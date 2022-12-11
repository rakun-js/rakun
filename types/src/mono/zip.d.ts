import { RakunMono } from ".";
import { ReturnUnzip } from "../types";
export declare const zip: <R extends RakunMono<any>[]>(...monoArray: R) => RakunMono<[...ReturnUnzip<R>]>;
