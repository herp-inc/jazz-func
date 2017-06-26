import { Dictionary } from './Dictionary';

export function values<T>(dict: Dictionary<T>): T[] {
    const xs: T[] = [];

    for (const key in dict) xs.push(dict[key]);

    return xs;
}
