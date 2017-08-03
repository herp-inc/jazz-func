import { Dictionary } from './Dictionary';
import { empty } from './empty';
import { lookup } from './lookup';
import { Nullable } from '../nullable/Nullable';

export function fullOuterJoin<T, U>(left: Dictionary<T>, right: Dictionary<U>): Dictionary<[Nullable<T>, Nullable<U>]> {
    const dict: Dictionary<[Nullable<T>, Nullable<U>]> = empty();

    for (const key in left) {
        dict[key] = [left[key], lookup(key, right)];
    }

    for (const key in right) {
        dict[key] = [lookup(key, left), right[key]];
    }

    return dict;
}

export function fullOuterJoinC<T, U>(left: Dictionary<T>): (right: Dictionary<U>) => Dictionary<[Nullable<T>, Nullable<U>]> {
    return function (right: Dictionary<U>): Dictionary<[Nullable<T>, Nullable<U>]> {
        return fullOuterJoin(left, right);
    }
}
