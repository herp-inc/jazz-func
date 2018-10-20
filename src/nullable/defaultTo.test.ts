import { defaultTo, defaultToC } from '../../src/nullable/defaultTo';


describe(defaultTo, () => {
    const num: number = 42;
    it('should defaultTo return first argument with null', () => {
        expect(defaultTo(num, null)).toBe(42);
    });

    it('should defaultTo return second argument with non-null value', () => {
        expect(defaultTo(num, 34)).toBe(34);
    });
});

describe(defaultToC, () => {
    const num: number = 42;

    it('should defaultTo return first argument with null', () => {
        expect(defaultToC(num)(null)).toBe(42);
    });

    it('should defaultTo return second argument with non-null value', () => {
        expect(defaultToC(num)(34)).toBe(34);
    });
});
