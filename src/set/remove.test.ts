import { remove, removeC } from '.';

describe(remove, () => {
    it('removes the given value from the given set', () => {
        const set = new Set([42]);
        const expected = new Set();

        expect(remove(42, set)).toEqual(expected);
    });

    it('does nothing when the given value is not in the given set', () => {
        const set = new Set();
        const expected = new Set();

        expect(remove(42, set)).toEqual(expected);
    });
});

describe(removeC, () => {
    it('removes the given value from the given set', () => {
        const set = new Set([42]);
        const expected = new Set();

        expect(removeC(42)(set)).toEqual(expected);
    });

    it('does nothing when the given value is not in the given set', () => {
        const set = new Set();
        const expected = new Set();

        expect(removeC(42)(set)).toEqual(expected);
    });
});
