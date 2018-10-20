import { map, mapC } from './';

function show(n: number): string {
    return String(n);
}

describe(map, () => {
    it('should map non-null values with the given function', () => {
        expect(map(show, 42)).toBe('42');
    });

    it('should map null to null', () => {
        expect(map(show, null)).toBe(null);
    });
});

describe(mapC, () => {
    it('should map non-null values with the given function', () => {
        expect(mapC(show)(42)).toBe('42');
    });

    it('should map null to null', () => {
        expect(mapC(show)(null)).toBe(null);
    });
});
