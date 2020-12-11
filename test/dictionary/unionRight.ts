import 'mocha';
import * as assert from 'power-assert';
import { unionRight, unionRightC } from '../../src/dictionary';

describe('Dictionary.unionRight()', () => {
    it('should return the union of two dictionaries', () => {
        assert.deepEqual(unionRight({ foo: 0, bar: 1 }, { baz: 2, qux: 3 }), {
            foo: 0,
            bar: 1,
            baz: 2,
            qux: 3
        });
    });

    it('should be right-biased', () => {
        assert.deepEqual(unionRight({ foo: 0, bar: 1 }, { foo: 42, baz: 2 }), {
            foo: 42,
            bar: 1,
            baz: 2
        });
    });
});

describe('Dictionary.unionRightC()', () => {
    it('should return the union of two dictionaries', () => {
        assert.deepEqual(unionRightC({ foo: 0, bar: 1 })({ baz: 2, qux: 3 }), {
            foo: 0,
            bar: 1,
            baz: 2,
            qux: 3
        });
    });

    it('should be right-biased', () => {
        assert.deepEqual(unionRightC({ foo: 0, bar: 1 })({ foo: 42, baz: 2 }), {
            foo: 42,
            bar: 1,
            baz: 2
        });
    });
});
