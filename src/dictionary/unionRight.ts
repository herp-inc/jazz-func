import { Dictionary } from './Dictionary';
import { empty } from './empty';

export function unionRight<T>(left: Dictionary<T>, right: Dictionary<T>): Dictionary<T> {
    const newDict: Dictionary<T> = empty<T>();

    for (const key in left) newDict[key] = left[key];
    for (const key in right) newDict[key] = right[key];

    return newDict;
}

export function unionRightC<T>(left: Dictionary<T>): (right: Dictionary<T>) => Dictionary<T> {
    return function (right: Dictionary<T>): Dictionary<T> {
        return unionRight(left, right);
    }
}
