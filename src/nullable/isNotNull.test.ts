import { isNotNull, Nullable } from './';

describe(isNotNull, () => {
    it('should return true when given a non-null value', () => {
        expect(isNotNull(42)).toBe(true);
    });

    it('should return false when given a null value', () => {
        expect(isNotNull(null)).toBe(false);
    });

    it('should behave as a typeguard', () => {
        function f(x: Nullable<number>) {
            const takesNumber = (_: number): void => {};

            if (isNotNull(x)) {
                // in this scope x has the type of number
                takesNumber(x); // typechecks
            }
        }

        f(42);
        f(null);
    });
});
