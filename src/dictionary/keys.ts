import { Dictionary } from './Dictionary';

export function keys<K extends string, T>(dict: Record<K, T>): K[]
export function keys<T>(dict: Dictionary<T>): string[] {
    const keys = [];

    for (const key in dict) keys.push(key);

    return keys;
}
