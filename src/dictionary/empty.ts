import { Dictionary } from './Dictionary';

export function empty<T>(): Record<never, T>
export function empty<T>(): Dictionary<T> {
    return Object.create(null);
}
