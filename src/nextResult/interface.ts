import { RakunNextResultValue } from "../resultValue/interface"

export type RakunNextResult<T> = RakunNextResultValues<T> | RakunNextResultDone | RakunNextResultPromise<T>

export type RakunNextResultPromise<T> = {
    type: 'promise',
    promise: Promise<RakunNextResultValue<T>[]>
}
export type RakunNextResultValues<T> = {
    type: 'values',
    values: RakunNextResultValue<T>[]
}

export type RakunNextResultDone = {
    type: 'done'
}


