import 'mocha';
import * as assert from 'power-assert';
import { keys } from '../../src/dictionary';

describe('Dictionary.keys()', () => {
    it('should return the keys in the given dictionary', () => {
        assert.deepEqual(keys({ foo: 0, bar: 0 }), ['foo', 'bar']);
    });
});
