import 'mocha';
import * as assert from 'power-assert';
import { alt } from '../../src/nullable/alt';

describe('Nullable.zip()', () => {
    it('should alt(null, null) to null', () => {
        assert.equal(alt(null, null), null);
    });

    it('should alt(non-null, null) to 42', () => {
        assert.equal(alt(42, null), 42);
    });

    it('should alt(null, non-null) to 42', () => {
        assert.equal(alt(null, 42), 42);
    });

    it('should alt(non-null-a, non-null-b) to non-null-a', () => {
        const value: number | string | null = alt(42, 'hello, world');
        assert.deepEqual(value, 42);
    });
});
