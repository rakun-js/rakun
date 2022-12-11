
import nextResult from "../nextResult";
import { createIterator } from "./createIterator";
import { RakunIterator } from "./interface";

export const error = <T>(error: any): RakunIterator<T> => {
    return createIterator<T>(() => {
        let finish = false
        return () => {
            if (!finish) {
                finish = true;
                return nextResult.error(error)
            }
            return nextResult.done()
        }
    });
}