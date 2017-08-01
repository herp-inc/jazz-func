import 'mocha';
import * as assert from 'power-assert';
import { isNull, Nullable } from '../../src/nullable';

describe('Nullable.isNull()', () => {
    it('should return true when given a null value', () => {
        assert.equal(isNull(null), true);
    });

    it('should return false when given a non-null value', () => {
        assert.equal(isNull(42), false);
    })

    it('should return false when given an undefined value', () => {
        assert.equal(isNull(void 0), false);
    });

    it('should behave as a type guard', () => {
        const x: Nullable<number> = 42;

        if (!isNull(x)) {
            const y: number = x; // typechecks
            assert.equal(y, 42);
        }
    });
});
