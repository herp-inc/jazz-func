import { Dictionary } from './Dictionary';
import { insert } from './insert';

export function modify<T>(key: string, f: (x: T) => T, dict: Dictionary<T>): Dictionary<T> {
    if (!Object.prototype.hasOwnProperty.call(dict, key)) return dict;

    return insert(key, f(dict[key]), dict);
}

export function modifyC<T>(key: string): (f: (x: T) => T) => (dict: Dictionary<T>) => Dictionary<T> {
    return function (f: (x: T) => T): (dict: Dictionary<T>) => Dictionary<T> {
        return function (dict: Dictionary<T>): Dictionary<T> {
            return modify(key, f, dict);
        }
    }
}
