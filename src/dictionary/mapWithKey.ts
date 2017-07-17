import { Dictionary } from './Dictionary';

export function mapWithKey<K extends string, T, U>(f: (key: K, x: T) => U, dict: Record<K, T>): Record<K, U>
export function mapWithKey<T, U>(f: (key: string, x: T) => U, dict: Dictionary<T>): Dictionary<U> {
    const newDict = Object.create(null);
    for (const key in dict) {
        newDict[key] = f(key, dict[key]);
    }
    return newDict;
}

export function mapWithKeyC<K extends string, T, U>(f: (key: K, x: T) => U): (dict: Record<K, T>) => Record<K, U>
export function mapWithKeyC<T, U>(f: (key: string, x: T) => U): (dict: Dictionary<T>) => Dictionary<U> {
    return function (dict: Dictionary<T>): Dictionary<U> {
        return mapWithKey(f, dict);
    }
}
