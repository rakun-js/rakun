
import { fromArray } from "./fromArray";
import { fromCallback } from "./fromCallback";
import { RakunStaticFlux } from "./interface";
import { just } from "./just";
export * from "./interface";
const flux: RakunStaticFlux = {
    just,
    fromArray,
    fromCallback
}
export default flux;