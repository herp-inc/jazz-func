import { Nullable } from './Nullable';

export function isNull<T>(x: Nullable<T>): x is null {
    return x === null;
}
