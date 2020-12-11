import 'mocha';
import * as assert from 'power-assert';
import { unionLeft, unionLeftC } from '../../src/dictionary';

describe('Dictionary.unionLeft()', () => {
    it('should return the union of two dictionaries', () => {
        assert.deepEqual(unionLeft({ foo: 0, bar: 1 }, { baz: 2, qux: 3 }), {
            foo: 0,
            bar: 1,
            baz: 2,
            qux: 3
        });
    });

    it('should be left-biased', () => {
        assert.deepEqual(unionLeft({ foo: 0, bar: 1 }, { foo: 42, baz: 2 }), {
            foo: 0,
            bar: 1,
            baz: 2
        });
    });
});

describe('Dictionary.unionLeftC()', () => {
    it('should return the union of two dictionaries', () => {
        assert.deepEqual(unionLeftC({ foo: 0, bar: 1 })({ baz: 2, qux: 3 }), {
            foo: 0,
            bar: 1,
            baz: 2,
            qux: 3
        });
    });

    it('should be left-biased', () => {
        assert.deepEqual(unionLeftC({ foo: 0, bar: 1 })({ foo: 42, baz: 2 }), {
            foo: 0,
            bar: 1,
            baz: 2
        });
    });
});
