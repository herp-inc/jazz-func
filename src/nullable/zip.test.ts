import { zip } from './';

describe(zip, () => {
    it('should zip(null, null) to null', () => {
        expect(zip(null, null)).toBe(null);
    });

    it('should zip(non-null, null) to null', () => {
        expect(zip(42, null)).toBe(null);
    });

    it('should zip(null, non-null) to null', () => {
        expect(zip(null, 42)).toBe(null);
    });

    it('should zip(non-null, non-null) to [non-null, non-null]', () => {
        expect(zip(42, 'hello, world')).toEqual([42, 'hello, world']);
    });
});
