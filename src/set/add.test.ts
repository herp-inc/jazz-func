import { add, addC } from './';

describe(add, () => {
    it('adds the given value to the given set', () => {
        const set = new Set();
        const expected = new Set([42]);

        expect(add(42, set)).toEqual(expected);
    });

    it('does nothing when the given value is already contained in the given set', () => {
        const set = new Set([42]);
        const expected = new Set([42]);

        expect(add(42, set)).toEqual(expected);
    });
});

describe(addC, () => {
    it('adds the given value to the given set', () => {
        const set = new Set();
        const expected = new Set([42]);

        expect(addC(42)(set)).toEqual(expected);
    });

    it('does nothing when the given value is already contained in the given set', () => {
        const set = new Set([42]);
        const expected = new Set([42]);

        expect(addC(42)(set)).toEqual(expected);
    });
});
