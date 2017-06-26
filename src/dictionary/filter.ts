import { Dictionary } from './Dictionary';
import { empty } from './empty';

export function filter<T>(f: (x: T) => boolean, dict: Dictionary<T>): Dictionary<T> {
    const newDict: Dictionary<T> = empty<T>();

    for (const key in dict) if (f(dict[key])) newDict[key] = dict[key];

    return newDict;
}

export function filterC<T>(f: (x: T) => boolean): (dict: Dictionary<T>) => Dictionary<T> {
    return function (dict: Dictionary<T>): Dictionary<T> {
        return filter(f, dict);
    }
}
