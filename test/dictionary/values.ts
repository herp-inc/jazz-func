import 'mocha';
import * as assert from 'power-assert';
import { values } from '../../src/dictionary';

describe('Dictionary.values()', () => {
    it('should return the values contained in the given dictionary', () => {
        assert.deepEqual(values({ foo: 0, bar: 42 }), [0, 42]);
    });
});
