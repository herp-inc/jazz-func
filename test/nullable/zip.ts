import 'mocha';
import * as assert from 'power-assert';
import { zip } from '../../src/nullable';

describe('Nullable.zip()', () => {
    it('should zip(null, null) to null', () => {
        assert.equal(zip(null, null), null);
    });

    it('should zip(non-null, null) to null', () => {
        assert.equal(zip(42, null), null);
    });

    it('should zip(null, non-null) to null', () => {
        assert.equal(zip(null, 42), null);
    });

    it('should zip(non-null, non-null) to [non-null, non-null]', () => {
        assert.deepEqual(zip(42, 'hello, world'), [42, 'hello, world']);
    });
});
