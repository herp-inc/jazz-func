import { alt, altC } from '../../src/nullable/alt';

describe(alt, () => {
    it('should return null when the both arguments are null', () => {
        expect(alt(null, null)).toBe(null);
    });

    it('should return the first argument when it is a non-null value and the second one is null', () => {
        expect(alt(42, null)).toBe(42);
    });

    it('should return the second argument when it is a non-null value and the first one is null', () => {
        expect(alt(null, 42)).toBe(42);
    });

    it('should return the first argument when it is a non-null value and the second one is also non-null', () => {
        const value: number | string | null = alt(42, 'hello, world');
        expect(value).toBe(42);
    });
});

describe(altC, () => {
    it('should return null when the both arguments are null', () => {
        expect(altC(null)(null)).toBe(null);
    });

    it('should return the first argument when it is a non-null value and the second one is null', () => {
        expect(altC(42)(null)).toBe(42);
    });

    it('should return the second argument when it is a non-null value and the first one is null', () => {
        expect(altC(null)(42)).toBe(42);
    });

    it('should return the first argument when it is a non-null value and the second one is also non-null', () => {
        const value: number | string | null = altC(42)('hello, world');
        expect(value).toBe(42);
    });
});
