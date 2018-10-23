import { zipWith } from './';

describe(zipWith, () => {
    function f(n: number, str: string): string {
        return `${n}:${str}`;
    }

    it('should zipWith(f, null, null) to null', () => {
        expect(zipWith(f, null, null)).toBe(null);
    });

    it('should zipWith(f, non-null, null) to null', () => {
        expect(zipWith(f, 42, null)).toBe(null);
    });

    it('should zipWith(f, null, non-null) to null', () => {
        expect(zipWith(f, null, 'hello, world')).toBe(null);
    });

    it('should zipWith(f, non-null, non-null) to f(non-null, non-null)', () => {
        expect(zipWith(f, 42, 'hello, world')).toBe('42:hello, world');
    });
});
