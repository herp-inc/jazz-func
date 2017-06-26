import 'mocha';
import * as assert from 'power-assert';
import { Dictionary, entries } from '../../src/dictionary';

describe('Dictionary.entries()', () => {
    it('should return an array of key/value tuples', () => {
        const dict: Dictionary<number> = {
            zero: 0,
            one: 1,
            two: 2,
        };

        assert.deepEqual(entries(dict), [
            ['zero', 0],
            ['one', 1],
            ['two', 2]
        ]);
    });
});
