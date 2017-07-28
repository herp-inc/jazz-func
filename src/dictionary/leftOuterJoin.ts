import { Dictionary } from './Dictionary';
import { empty } from './empty';
import { lookup } from './lookup';
import { Nullable } from '../nullable/Nullable';

export function leftOuterJoin<T, U>(left: Dictionary<T>, right: Dictionary<U>): Dictionary<[T, Nullable<U>]> {
    const newDict: Dictionary<[T, Nullable<U>]> = empty();

    for (const key in left) {
        newDict[key] = [left[key], lookup(key, right)];
    }

    return newDict;
}

export function leftOuterJoinC<T, U>(left: Dictionary<T>): (right: Dictionary<U>) => Dictionary<[T, Nullable<U>]> {
    return function (right: Dictionary<U>): Dictionary<[T, Nullable<U>]> {
        return leftOuterJoin(left, right);
    }
}
