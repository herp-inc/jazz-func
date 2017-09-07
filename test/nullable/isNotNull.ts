import 'mocha';
import * as assert from 'power-assert';
import { isNotNull, Nullable } from '../../src/nullable';

describe('Nullable.isNotNull()', () => {
    it('should return true when given a non-null value', () => {
        assert.equal(isNotNull(42), true);
    });

    it('should return false when given a null value', () => {
        assert.equal(isNotNull(null), false);
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
