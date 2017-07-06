export function modifyProp<T extends object, K extends keyof T>(key: K, f: (old: T[K]) => T[K], struct: T): T {
    const newStruct = Object.assign({}, struct);
    newStruct[key] = f(struct[key]);

    return newStruct;
}

export function modifyPropC<T extends object, K extends keyof T = keyof T>(key: K): (f: (old: T[K]) => T[K]) => (struct: T) => T {
    return function (f: (old: T[K]) => T[K]): (struct: T) => T {
        return function (struct: T): T {
            return modifyProp(key, f, struct);
        }
    }
}
