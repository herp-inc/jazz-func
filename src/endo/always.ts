export function always<T>(x: T, _: T): T {
    return x;
}

export function alwaysC<T>(x: T): (_: T) => T {
    return function(_: T): T {
        return x;
    };
}
