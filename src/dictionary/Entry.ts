export type Entry<T> = [string, T];
export function Entry<T>(key: string, value: T): Entry<T> {
    return [key, value];
}
