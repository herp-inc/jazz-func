import { Dictionary } from './Dictionary';
import { empty } from './empty';
import { Entry } from './Entry';

export function fromArray<T>(xs: Entry<T>[]): Dictionary<T> {
    const length = xs.length;
    const dict: Dictionary<T> = empty<T>();

    for (let i = 0; i < length; i++) dict[xs[i][0]] = xs[i][1];

    return dict;
}
