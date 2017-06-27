import 'mocha';
import * as assert from 'power-assert';
import { remove, removeC } from '../../src/dictionary';

const dict = { foo: 0, bar: 42 };

describe('Dictionary.remove()', () => {
    it('should remove the value associated with the given key', () => {
        assert.deepEqual(remove('foo', dict), { bar: 42 })
    });

    it('should do nothing on a dictionary without the given key', () => {
        assert.deepEqual(remove('baz', dict), dict);
    });
});

describe('Dictionary.removeC()', () => {
    it('should remove the value associated with the given key', () => {
        assert.deepEqual(removeC('foo')(dict), { bar: 42 })
    });

    it('should do nothing on a dictionary without the given key', () => {
        assert.deepEqual(removeC('baz')(dict), dict);
    });
});
