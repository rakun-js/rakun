import { iterator } from "..";
import { createMono } from "./createMono";

export const error = <T>(error: any) => {
    return createMono<T>(iterator.error(error));
}
