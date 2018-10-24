import { Endo } from '../endo';

export function remove<T>(x: T, set: Set<T>): Set<T> {
    const clone = new Set(set);
    clone.delete(x);

    return clone;
}

export function removeC<T>(x: T): Endo<Set<T>> {
    return function(set: Set<T>): Set<T> {
        return remove(x, set);
    };
}
