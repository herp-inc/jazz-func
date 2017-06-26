import {Nullable} from './Nullable';

export function zip<T1, T2>(a: Nullable<T1>, b: Nullable<T2>): Nullable<[T1, T2]> {
    return a === null || b === null ? null : [a, b];
}

export function zip3<T1, T2, T3>(a: Nullable<T1>, b: Nullable<T2>, c: Nullable<T3>): Nullable<[T1, T2, T3]> {
    return a === null || b === null || c === null ? null : [a, b, c];
}
