import { Dictionary } from './Dictionary';

export function empty<T>(): Dictionary<T> {
    return Object.create(null);
}
