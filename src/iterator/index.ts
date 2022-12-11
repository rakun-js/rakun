import { empty } from "./empty"
import { error } from "./error"
import { fromArray } from "./fromArray"
import { fromCallback } from "./fromCallback"
import { just } from "./just"
import { then } from "./then"
import { zip } from "./zip"
import { RakunStaticIterator } from "./interface";
export * from "./interface";
const iterator: RakunStaticIterator = {
    empty,
    error,
    fromArray,
    fromCallback,
    just,
    then,
    zip
}
export default iterator;