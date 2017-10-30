import { Dictionary } from './Dictionary';
import { Nullable } from '../nullable/Nullable';

export function lookup<T>(key: string, dict: Dictionary<T>): Nullable<T> {
    return Object.prototype.hasOwnProperty.call(dict, key) ? dict[key] as T : null;
}
export function lookupC(key: string): <T>(dict: Dictionary<T>) => Nullable<T>
export function lookupC<T>(key: string): (dict: Dictionary<T>) => Nullable<T>
export function lookupC(key: string): <T>(dict: Dictionary<T>) => Nullable<T> {
    return function <T>(dict: Dictionary<T>): Nullable<T> {
        return lookup(key, dict);
    }
}
