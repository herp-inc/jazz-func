import { Nullable } from './Nullable';

export function isNotNull<T>(nullable: Nullable<T>): nullable is T {
    return nullable !== null;
}
