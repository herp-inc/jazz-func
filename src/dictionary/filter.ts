import { Dictionary } from './Dictionary';
import { empty } from './empty';

export function filter<T>(f: (x: T) => boolean, dict: Dictionary<T>): Dictionary<T>;
export function filter<S extends T, T>(f: (x: T) => x is S, dict: Dictionary<T>): Dictionary<S>;
export function filter<T>(f: (x: T) => boolean, dict: Dictionary<T>): Dictionary<T> {
    const newDict: Dictionary<T> = empty<T>();

    for (const key in dict) {
        const value = dict[key] as T;

        if (f(value)) {
            newDict[key] = value;
        }
    }

    return newDict;
}

export function filterC<T>(f: (x: T) => boolean): (dict: Dictionary<T>) => Dictionary<T>;
export function filterC<S extends T, T>(f: (x: T) => x is S): (dict: Dictionary<T>) => Dictionary<S>;
export function filterC<T>(f: (x: T) => boolean): (dict: Dictionary<T>) => Dictionary<T> {
    return function (dict: Dictionary<T>): Dictionary<T> {
        return filter(f, dict);
    }
}
