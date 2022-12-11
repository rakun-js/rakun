
import nextResult from "../nextResult";
import { createIterator } from "./createIterator";
import { RakunIterator } from "./interface";


export const fromArray = <T>(values: T[]): RakunIterator<T> => {
    return createIterator<T>(() => {
        let finish = false
        return () => {
            if (!finish) {
                finish = true;
                return nextResult.valuesFromArray(values)
            }
            return nextResult.done()
        }
    });
}
