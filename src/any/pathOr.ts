export function pathOr(path: string[], seed: boolean, x: any): boolean
export function pathOr(path: string[], seed: number, x: any): number
export function pathOr(path: string[], seed: string, x: any): string
export function pathOr<T extends string | number | boolean>(path: string[], seed: T, x: any): T {
    let i = 0;
    let next: any = x;
    while (i < path.length) {
        if (path[i] in next) {
            next = next[path[i]];
        } else {
            return seed
        }
        i += 1 | 0;
    }

    if (typeof next === typeof seed) {
        return next;
    }
    return seed;
}
