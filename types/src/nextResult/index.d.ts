import { RakunNextResult, RakunNextResultDone, RakunNextResultPromise, RakunNextResultValues } from "./interface";
import { RakunNextResultValue } from "../resultValue/interface";
export declare class NextResultStaticImpl {
    isDone<R>(nextResult: RakunNextResult<R>): nextResult is RakunNextResultDone;
    isPromise<R>(nextResult: RakunNextResult<R>): nextResult is RakunNextResultPromise<R>;
    isValues<R>(nextResult: RakunNextResult<R>): nextResult is RakunNextResultValues<R>;
    done(): RakunNextResultDone;
    values<T>(values: RakunNextResultValue<T>[]): RakunNextResultValues<T>;
    promise<R>(promise: Promise<RakunNextResultValue<R>[]>): RakunNextResultPromise<R>;
    error<T>(...errors: any[]): RakunNextResultValues<T>;
    valuesFromArray<T>(values: T[]): RakunNextResultValues<T>;
    promiseFromPromiseArray<T>(promise: Promise<T[]>): RakunNextResultPromise<T>;
}
declare const nextResult: NextResultStaticImpl;
export default nextResult;
