import { Dictionary } from './Dictionary';
import { Entry } from './Entry';

export function entries<T>(dict: Dictionary<T>): Entry<T>[] {
    const xs: Entry<T>[] = [];

    for (const key in dict) {
        const x: Entry<T> = [key, dict[key] as T];
        xs.push(x);
    }

    return xs;
}
