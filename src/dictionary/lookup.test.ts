import { lookup, lookupC } from './';

describe(lookup, () => {
    it('should look up the value associated to the given key', () => {
        expect(lookup('foo', { foo: 42, bar: 0 })).toBe(42);
    });

    it('should return null when the key is not found', () => {
        expect(lookup('foo', { bar: 0 })).toBe(null);
    });
});

describe(lookupC, () => {
    it('should look up the value associated to the given key', () => {
        expect(lookupC('foo')({ foo: 42, bar: 0 })).toBe(42);
    });

    it('should return null when the key is not found', () => {
        expect(lookupC('foo')({ bar: 0 })).toBe(null);
    });
});
