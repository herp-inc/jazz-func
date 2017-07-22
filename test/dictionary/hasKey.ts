import 'mocha';
import * as assert from 'power-assert';
import { empty, hasKey, hasKeyC } from '../../src/dictionary';
import { Dictionary } from '../../src/dictionary/Dictionary';

describe('Dictionary.hasKey()', () => {
    it('should return true when the key is present in the given dictionary', () => {
        assert.equal(hasKey('foo', { foo: 42 }), true);
    });

    it('should return false when the key is not present in the given dictionary', () => {
        assert.equal(hasKey('foo', empty()), false);
    });

    it('should behave as a type guard', () => {
        const dict: Dictionary<number> = { x: 0, y: 42 };

        if (hasKey('x', dict)) {
            const record: Record<'x', number> = dict; // this should typecheck
            assert.equal(record.x, 0);

            const anotherDict: Dictionary<number> = dict; // it still behaves as a dictionary
            assert.equal(anotherDict.y, 42);
        }
    });
});

describe('Dictionary.hasKeyC()', () => {
    it('should return true when the key is present in the given dictionary', () => {
        assert.equal(hasKeyC('foo')({ foo: 42 }), true);
    });

    it('should return false when the key is not present in the given dictionary', () => {
        assert.equal(hasKeyC('foo')(empty()), false);
    });

    it('should behave as a type guard', () => {
        const dict: Dictionary<number> = { x: 0, y: 42 };

        if (hasKeyC<number, 'x'>('x')(dict)) {
            const record: Record<'x', number> = dict; // this should typecheck
            assert.equal(record.x, 0);

            const anotherDict: Dictionary<number> = dict; // it still behaves as a dictionary
            assert.equal(anotherDict.y, 42);
        }
    });
});
