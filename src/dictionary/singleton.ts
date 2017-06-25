import { Dictionary } from './Dictionary';
import { empty } from './empty';

export function singleton<T>(key: string, value: T): Dictionary<T> {
    const dict: Dictionary<T> = empty<T>();

    dict[key] = value;

    return dict;
}

export function singletonC<T>(key: string): (value: T) => Dictionary<T> {
    return function (value: T): Dictionary<T> {
        return singleton(key, value);
    }
}
