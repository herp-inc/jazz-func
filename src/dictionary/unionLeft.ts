import { Dictionary } from './Dictionary';
import { empty } from './empty';

export function unionLeft<T>(left: Dictionary<T>, right: Dictionary<T>): Dictionary<T> {
    const newDict: Dictionary<T> = empty<T>();

    for (const key in right) newDict[key] = right[key];
    for (const key in left) newDict[key] = left[key];

    return newDict;
}

export function unionLeftC<T>(left: Dictionary<T>): (right: Dictionary<T>) => Dictionary<T> {
    return function (right: Dictionary<T>): Dictionary<T> {
        return unionLeft(left, right);
    }
}
