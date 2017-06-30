import { Nullable } from './Nullable';

export function zipWith<T1, T2, U>(f: (x: T1, y: T2) => U, a: Nullable<T1>, b: Nullable<T2>): Nullable<U> {
    return a === null || b === null ? null : f(a, b);
}
