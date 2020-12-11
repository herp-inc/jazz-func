export function setProp<T extends object, K extends keyof T>(key: K, value: T[K], struct: T): T {
    const newStruct = Object.assign({}, struct);
    newStruct[key] = value;

    return newStruct;
}

export function setPropC<T extends object, K extends keyof T>(key: K): (value: T[K]) => (struct: T) => T {
    return function (value: T[K]): (struct: T) => T {
        return function (struct: T): T {
            return setProp(key, value, struct);
        }
    }
}
