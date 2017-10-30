import 'mocha';
import * as assert from 'power-assert';
import { modify, modifyC } from '../../src/dictionary';

describe('Dictionary.modify()', () => {
    it('should modify the value in the given key with the given function', () => {
        const dict = { foo: 0, bar: 42 };
        const expected = { foo: 0, bar: 84 };

        assert.deepEqual(modify('bar', n => n * 2, dict), expected);
    });

    it('should return the given dictionary itself when the key is not present in the dictionary', () => {
        const dict = { foo: 0, bar: 42 };

        assert.deepEqual(modify('baz', n => n * 2, dict), dict);
    });
});

describe('Dictionary.modifyC()', () => {
    it('should modify the value in the given key with the given function', () => {
        const dict = { foo: 0, bar: 42 };
        const expected = { foo: 0, bar: 84 };

        assert.deepEqual(modifyC<number>('bar', n => n * 2)(dict), expected);
    });

    it('should return the given dictionary itself when the key is not present in the dictionary', () => {
        const dict = { foo: 0, bar: 42 };

        assert.deepEqual(modifyC<number>('baz', n => n * 2)(dict), dict);
    });
});
