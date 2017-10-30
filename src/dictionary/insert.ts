import { Dictionary } from './Dictionary';
import { empty } from './empty';

export function insert<T>(key: string, value: T, dict: Dictionary<T>): Dictionary<T> {
    const newDict = Object.assign(empty(), dict);

    newDict[key] = value;

    return newDict;
}

export function insertC<T>(key: string, value: T): (dict: Dictionary<T>) => Dictionary<T> {
    return function (dict: Dictionary<T>): Dictionary<T> {
        return insert(key, value, dict);
    }
}
