import { Dictionary } from './Dictionary';

export function hasKey<T, K extends string>(key: K, dict: Dictionary<T>): dict is Record<K, T> & Dictionary<T> {
    return Object.prototype.hasOwnProperty.call(dict, key);
}

export function hasKeyC<T, K extends string>(key: K): (dict: Dictionary<T>) => dict is Record<K, T> & Dictionary<T> {
    return function(dict: Dictionary<T>): dict is Record<K, T> & Dictionary<T> {
        return hasKey(key, dict);
    };
}
