import { isNull, Nullable } from './';

describe(isNull, () => {
    it('should return true when given a null value', () => {
        expect(isNull(null)).toBe(true);
    });

    it('should return false when given a non-null value', () => {
        expect(isNull(42)).toBe(false);
    });

    it('should return false when given an undefined value', () => {
        expect(isNull(void 0)).toBe(false);
    });

    it('should behave as a type guard', () => {
        const x: Nullable<number> = 42;

        if (isNull(x)) {
            throw new Error('x must not be null');
        } else {
            const y: number = x; // typechecks
            expect(y).toBe(42);
        }
    });
});
