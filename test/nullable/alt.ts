import 'mocha';
import * as assert from 'power-assert';
import { alt } from '../../src/nullable/alt';

describe('Nullable.alt()', () => {
    it('should return null when the both arguments are null', () => {
        assert.equal(alt(null, null), null);
    });

    it('should return the first argument when it is a non-null value and the second one is null', () => {
        assert.equal(alt(42, null), 42);
    });

    it('should return the second argument when it is a non-null value and the first one is null', () => {
        assert.equal(alt(null, 42), 42);
    });

    it('should return the first argument when it is a non-null value and the second one is also non-null', () => {
        const value: number | string | null = alt(42, 'hello, world');
        assert.deepEqual(value, 42);
    });
});
