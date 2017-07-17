import { Dictionary } from './Dictionary';

export function map<K extends string, T, U>(f: (x: T) => U, dict: Record<K, T>): Record<K, U>
export function map<T, U>(f: (x: T) => U, dict: Dictionary<T>): Dictionary<U> {
    const newDict: any = Object.create(null);
    for (const key in dict) {
        newDict[key] = f(dict[key]);
    }

    return newDict
}

export function mapC<K extends string, T, U>(f: (x: T) => U): (dict: Record<K, T>) => Record<K, U>
export function mapC<T, U>(f: (x: T) => U): (dict: Dictionary<T>) => Dictionary<U> {
    return function (dict) {
        return map(f, dict);
    }
}
