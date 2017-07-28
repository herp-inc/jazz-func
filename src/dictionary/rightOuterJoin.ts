import { Dictionary } from './Dictionary';
import { empty } from './empty';
import { lookup } from './lookup';
import { Nullable } from '../nullable/Nullable';

export function rightOuterJoin<T, U>(left: Dictionary<T>, right: Dictionary<U>): Dictionary<[Nullable<T>, U]> {
    const newDict: Dictionary<[Nullable<T>, U]> = empty();

    for (const key in right) {
        newDict[key] = [lookup(key, left), right[key]];
    }

    return newDict;
}

export function rightOuterJoinC<T, U>(left: Dictionary<T>): (right: Dictionary<U>) => Dictionary<[Nullable<T>, U]> {
    return function (right: Dictionary<U>): Dictionary<[Nullable<T>, U]> {
        return rightOuterJoin(left, right);
    }
}
