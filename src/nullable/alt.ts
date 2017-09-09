import { Nullable } from './Nullable';

export function alt<T, U = T>(a: Nullable<T>, b: Nullable<U>): T | U | null {
    if (a !== null) {
        return a;
    }
    if (b !== null) {
        return b;
    }
    return null;
}

export function altC<T>(a: Nullable<T>): <U>(b: Nullable<U>) => T | U | null {
    if (a === null) {
        return function <U>(b: Nullable<U>): T | U | null {
            return b === null ? null : b;
        }
    } else {
        return function <U>(_: Nullable<U>): T | U | null {
            return a;
        }
    }
}
