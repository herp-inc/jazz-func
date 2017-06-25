import { Dictionary } from './Dictionary';
import { fromArray } from './fromArray';
import { entries } from './entries';

export function map<T, U>(f: (x: T) => U, dict: Dictionary<T>): Dictionary<U> {
    return fromArray(entries(dict).map<[string, U]>(([k, v]) => [k, f(v)]));
}

export function mapC<T, U>(f: (x: T) => U): (dict: Dictionary<T>) => Dictionary<U> {
    return function (dict: Dictionary<T>): Dictionary<U> {
        return map(f, dict);
    }
}
