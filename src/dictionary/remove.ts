import { Dictionary } from './Dictionary';
import { empty } from './empty';

export function remove<T>(key: string, dict: Dictionary<T>): Dictionary<T> {
    const newDict = Object.assign(empty(), dict);

    delete newDict[key];

    return newDict;
}

export function removeC<T>(key: string): (dict: Dictionary<T>) => Dictionary<T> {
    return function (dict: Dictionary<T>): Dictionary<T> {
        return remove(key, dict);
    }
}
