export function toggle<T>(x: T, set: Set<T>): Set<T> {
    const clone = new Set(set);

    if (clone.has(x)) {
        clone.delete(x);
    } else {
        clone.add(x);
    }

    return clone;
}

export function toggleC<T>(x: T): (set: Set<T>) => Set<T> {
    return function(set: Set<T>): Set<T> {
        return toggle(x, set);
    };
}
