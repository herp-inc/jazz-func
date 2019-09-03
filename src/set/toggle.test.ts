import { toggle, toggleC } from './';

describe(toggle, () => {
    describe('when the given value is not contained in the given set', () => {
        it('adds the given value to the given set', () => {
            const set = new Set();
            const expected = new Set([42]);

            expect(toggle(42, set)).toEqual(expected);
        });
    });

    describe('when the given value is already contained in the given set', () => {
        it('removes the given value from the given set', () => {
            const set = new Set([42]);
            const expected = new Set();

            expect(toggle(42, set)).toEqual(expected);
        });
    });
});

describe(toggleC, () => {
    describe('when the given value is not contained in the given set', () => {
        it('adds the given value to the given set', () => {
            const set: Set<number> = new Set();
            const expected = new Set([42]);

            expect(toggleC(42)(set)).toEqual(expected);
        });
    });

    describe('when the given value is already contained in the given set', () => {
        it('removes the given value from the given set', () => {
            const set = new Set([42]);
            const expected = new Set();

            expect(toggleC(42)(set)).toEqual(expected);
        });
    });
});
