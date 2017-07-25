import 'mocha';
import * as assert from 'power-assert';
import { isNull } from '../../src/nullable/isNull';
import { Nullable } from '../../src/nullable/Nullable';


function getNullable(): Nullable<number> {
    return 42;
}

describe('Dictionary.isNull()', () => {
    it('isNull return true', () => {
        assert.deepEqual(isNull(null), true);
    });

    it('isNull return false', () => {
        assert.deepEqual(isNull(42), false);
    });

    it('type guard check', () => {
        const x: Nullable<number> = getNullable();

        if (isNull(x)) {
            return assert.ok(false);
        }
        const y: number = x;
        assert.ok(y !== null);
    });
});
