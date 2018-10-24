import { Dictionary } from './Dictionary';
import { fromArray } from './fromArray';
import { entries } from './entries';
import { Entry } from './Entry';

export function mapWithKey<T, U>(f: (key: string, x: T) => U, dict: Dictionary<T>): Dictionary<U> {
    return fromArray(entries(dict).map<Entry<U>>(([k, v]) => [k, f(k, v)]));
}

export function mapWithKeyC<T, U>(f: (key: string, x: T) => U): (dict: Dictionary<T>) => Dictionary<U> {
    return function(dict: Dictionary<T>): Dictionary<U> {
        return mapWithKey(f, dict);
    };
}
