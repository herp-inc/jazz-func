import { Nullable } from './Nullable';

export function defaultTo<T>(x: T, n: Nullable<T>): T {
    return n === null ? x : n;
}

export function defaultToC<T>(x: T): (n: Nullable<T>) => T {
    return function(n) {
        return n === null ? x : n;
    };
}
