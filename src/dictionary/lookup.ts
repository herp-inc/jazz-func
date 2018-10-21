import { Dictionary } from './Dictionary';
import { Nullable } from '../nullable/Nullable';

export function lookup<T>(key: string, dict: Dictionary<T>): Nullable<T> {
    return Object.prototype.hasOwnProperty.call(dict, key) ? (dict[key] as T) : null;
}

export function lookupC<T>(key: string): (dict: Dictionary<T>) => Nullable<T> {
    return function(dict: Dictionary<T>): Nullable<T> {
        return lookup(key, dict);
    };
}
