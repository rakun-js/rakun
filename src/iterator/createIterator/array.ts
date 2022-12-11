import nextResult from "../../nextResult";
import { RakunNextResultPromise, RakunNextResultValues } from "../../nextResult/interface";
import resultValue from "../../resultValue";
import { RakunNext } from "../../types";
import { isNotPromise } from "../../utils";
import { RakunIterator } from "../interface";
import { block } from "./block";
import { createIterator } from ".";

const extractArray = <T>(valuesOrPromises: T[] | Promise<T[]>) => {
    if (isNotPromise(valuesOrPromises)) {
        return nextResult.values(resultValue.fromArray([valuesOrPromises])) as RakunNextResultValues<T[]>
    } else {
        return nextResult.promise(valuesOrPromises.then(item => resultValue.fromArray([item]))) as RakunNextResultPromise<T[]>
    }
}
export const array = <T>(nextFn: RakunNext<T>) => (): RakunIterator<T[]> => {
    return createIterator<T[]>(() => {
        let finish = false;
        return (ctx) => {
            if (!finish) {
                finish = true;
                let valuesOrPromises = block(nextFn)(ctx)
                return extractArray(valuesOrPromises)
            } else {
                return nextResult.done()
            }
        }
    });
}