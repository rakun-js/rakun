import _flux from "./flux";
import _mono from "./mono";
import _iterator from "./iterator";
import _context from "./context";
export * from "./flux";
export * from "./mono";
export * from "./wrapped";
export * from "./context";
export * from "./iterator";
export * from "./utils";
export * from "./types";

export default {
    flux: _flux, mono: _mono, context: _context, iterator: _iterator
}

export const flux = _flux;
export const mono = _mono;
export const context = _context;
export const iterator = _iterator;