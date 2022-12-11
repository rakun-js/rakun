import { empty } from "./empty";
import { error } from "./error";
import { fromCallback } from "./fromCallback";
import { RakunStaticMono } from "./interface";
import { just } from "./just";
import { then } from "./then";
import { zip } from "./zip";
export * from "./interface";
const mono: RakunStaticMono = {
    fromCallback,
    zip,
    just,
    then,
    empty,
    error
}
export default mono;