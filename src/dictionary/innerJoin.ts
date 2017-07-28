import { Dictionary } from './Dictionary';
import { empty } from './empty';
import { hasKey } from './hasKey';

export function innerJoin<T, U>(left: Dictionary<T>, right: Dictionary<U>): Dictionary<[T, U]> {
    const dict: Dictionary<[T, U]> = empty();

    for (const key in left) {
        if (hasKey(key, right)) {
            dict[key] = [left[key], right[key]];
        }
    }

    return dict;
}

export function innerJoinC<T, U>(left: Dictionary<T>): (right: Dictionary<U>) => Dictionary<[T, U]> {
    return function (right: Dictionary<U>): Dictionary<[T, U]> {
        return innerJoin(left, right);
    }
}
