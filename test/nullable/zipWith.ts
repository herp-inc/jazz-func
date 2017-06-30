import 'mocha';
import * as assert from 'power-assert';
import { zipWith } from '../../src/nullable/zipWith';

describe('Nullable.zip()', () => {
    function f(n: number, str: string): string {
        return `${n}:${str}`;
    }

    it('should zipWith(f, null, null) to null', () => {
        assert.equal(zipWith(f, null, null), null);
    });

    it('should zipWith(f, non-null, null) to null', () => {
        assert.equal(zipWith(f, 42, null), null);
    });

    it('should zipWith(f, null, non-null) to null', () => {
        assert.equal(zipWith(f, null, 'hello, world'), null);
    });

    it('should zipWith(f, non-null, non-null) to f(non-null, non-null)', () => {
        assert.deepEqual(zipWith(f, 42, 'hello, world'), '42:hello, world');
    });
});
