export function add<T>(x: T, set: Set<T>): Set<T> {
    const clone = new Set(set);
    clone.add(x);

    return clone;
}

export function addC<T>(x: T): (set: Set<T>) => Set<T> {
    return function(set: Set<T>): Set<T> {
        return add(x, set);
    };
}
