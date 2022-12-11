export declare const isPromise: <T>(value: T | Promise<T>) => value is Promise<T>;
export declare const isNotPromise: <T>(value: T | Promise<T>) => value is T;
