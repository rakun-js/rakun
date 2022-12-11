import { RakunNextResultDone, RakunNextResultValues } from "../nextResult/interface";
import { RakunNextResultValue } from "./interface";
export declare class ResultValueStaticImpl {
    itemsOrPromisesToNextResultPromise<R>(itemsOrPromises: (R[] | Promise<R[]>)[]): Promise<RakunNextResultValue<R>[]>;
    values<T>(result: RakunNextResultDone | RakunNextResultValues<T>): T | null;
    fromArray<T>(array: T[]): RakunNextResultValue<T>[];
    fromValue<T>(arr: T): RakunNextResultValue<T>;
    fnDoOnNext<T>(fn: (value: T) => void): (r: RakunNextResultValue<T>) => void;
    fnDoOnError<T>(fn: (value: T) => void): (r: RakunNextResultValue<T>) => void;
    valueOrThrow<T>(r: RakunNextResultValue<T>): T;
}
declare const resultValue: ResultValueStaticImpl;
export default resultValue;
