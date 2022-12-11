
import { RakunNext } from "../../types"
import { onErrorResume } from "./onErrorResume";
import { blockFirst } from "./blockFirst";
import { results } from "./results";
import { block } from "./block";
import { switchIfEmpty } from "./switchIfEmpty";
import { doOnError } from "./doOnError";
import { doOnNext } from "./doOnNext";
import { flatPipe } from "./flatPipe";
import { pipe } from "./pipe";
import { array } from "./array";
import { defaultIfEmpty } from "./defaultIfEmpty";
import { filter } from "./filter";
import { flatFilter } from "./flatFilter";
import { then } from "./then";
import { thenReturn } from "./thenReturn";
import { zip } from "./zip";
import { zipWhen } from "./zipWhen";
import { RakunIterator } from "../interface";
export class RakunIteratorImpl<T> implements RakunIterator<T>  {
    constructor(public next: RakunNext<T>) { }
    get iterator() {
        return this;
    }
    array = array(this.next)
    block = block(this.next)
    blockFirst = blockFirst(this.next)
    defaultIfEmpty = defaultIfEmpty(this.next)
    doOnError = doOnError(this.next)
    doOnNext = doOnNext(this.next)
    filter = filter(this.next)
    flatFilter = flatFilter(this.next)
    flatPipe = flatPipe(this.next)
    onErrorResume = onErrorResume(this.next)
    pipe = pipe(this.next)
    results = results(this.next)
    switchIfEmpty = switchIfEmpty(this.next)
    then = then(this.next)
    thenReturn = thenReturn(this.next)
    zip = zip(this)
    zipWhen = zipWhen(this.next)
}
export const createIterator = <T>(next: RakunNext<T>): RakunIterator<T> => {
    return new RakunIteratorImpl<T>(next)
}

