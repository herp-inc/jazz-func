import 'mocha';
import * as assert from 'power-assert';
import { fromArray } from '../../src/dictionary';

describe('Dictionary.fromArray()', () => {
    it('should create a new dictionary from a key-value array', () => {
        assert.deepEqual(fromArray([
            ['zero', 0],
            ['one', 1],
            ['two', 2]
        ]), {
            zero: 0,
            one: 1,
            two: 2
        });
    });
});
