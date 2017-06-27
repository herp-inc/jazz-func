import { Nullable } from './Nullable';

export function map<T, U>(f: (x: T) => U, x: Nullable<T>): Nullable<U> {
    return x === null ? null : f(x);
}

export function mapC<T, U>(f: (x: T) => U): (x: Nullable<T>) => Nullable<U> {
    return function (x: Nullable<T>): Nullable<U> {
        return map(f, x);
    }
}
