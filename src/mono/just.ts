import { RakunMono } from ".";
import iterator from "../iterator";
import { createMono } from "./createMono";

export const just = <T>(value: T): RakunMono<T> => {
    return createMono<T>(iterator.just(value));
}