
import nextResult from "../nextResult";
import { createIterator } from "./createIterator";
import { RakunIterator } from "./interface";

export const empty = <T>(): RakunIterator<T> => {
    return createIterator<T>(() => {
        return () => {
            return nextResult.done()
        }
    });
}
