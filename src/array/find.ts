export function find<T>(f: (x: T) => boolean, xs: T[]): T | null {
    let i = 0;
    while (i < xs.length) {
        if (f(xs[i]) === true) {
            return xs[i];
        }
        i = (i + 1) | 0;
    }
    return null;
}
