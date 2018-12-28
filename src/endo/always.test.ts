import { always, alwaysC } from './';

describe(always, () => {
    it('returns the first argument', () => {
        const x = 3;
        const y = 7;

        expect(always(x, y)).toBe(x);
    });
});

describe(alwaysC, () => {
    it('returns the first argument', () => {
        const x = 3;
        const y = 7;

        expect(alwaysC(x)(y)).toBe(x);
    });
});
