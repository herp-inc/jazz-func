import { Dictionary } from './Dictionary';
import { empty } from './empty';
import { Entry } from './Entry';

export function insertMany<T>(entries: Entry<T>[], dict: Dictionary<T>): Dictionary<T> {
    const newDict = Object.assign(empty(), dict);
    let i = 0;
    while (i < entries.length) {
        newDict[entries[i][0]] = entries[i][1];
        i += 1 | 0;
    }
    return newDict;
}

export function insertManyC<T>(entries: Entry<T>[]):(dict: Dictionary<T>) => Dictionary<T> {
    return function (dict) {
        return insertMany(entries, dict);
    }
}
