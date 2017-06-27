import {Nullable} from './Nullable';

export function zip<T1, T2>(a: Nullable<T1>, b: Nullable<T2>): Nullable<[T1, T2]> {
    return a === null || b === null ? null : [a, b];
}
