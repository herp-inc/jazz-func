export function getProp<T extends object, K extends keyof T>(key: K, struct: T): T[K] {
    return struct[key];
}

export function getPropC<T extends object, K extends keyof T>(key: K): (struct: T) => T[K] {
    return function (struct: T): T[K] {
        return getProp(key, struct);
    }
}
