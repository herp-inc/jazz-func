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
