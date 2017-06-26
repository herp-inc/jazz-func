import { Dictionary } from './Dictionary';

export function entries<T>(dict: Dictionary<T>): [string, T][] {
    const xs: [string, T][] = [];

    for (const key in dict) {
        const x: [string, T] = [key, dict[key]];
        xs.push(x)
    };

    return xs;
}
