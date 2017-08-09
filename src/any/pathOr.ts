export function pathOr(path: string[], seed: boolean, x: any): boolean
export function pathOr(path: string[], seed: number, x: any): number
export function pathOr(path: string[], seed: string, x: any): string
export function pathOr<T extends string | number | boolean>(path: string[], def: T, target: any): T {
    let i = 0;

    let next: any = target;

    while (i < path.length) {
        if (typeof next !== 'undefined' && next !== null) {
            next = next[path[i]];
        } else {
            return def
        }
        i += 1 | 0;
    }

    if (typeof next === typeof def) {
        return next;
    }
    return def;
}
