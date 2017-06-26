import 'mocha';
import * as assert from 'power-assert';
import { Dictionary, map, mapC } from '../../src/dictionary';

const dict: Dictionary<number> = {
    zero: 0,
    one: 1
};

const expected: Dictionary<string> = {
    zero: '0',
    one: '1'
};

describe('Dictionary.map()', () => {
    it('should map the values with the given funciton', () => {
        assert.deepEqual(map(String, dict), expected);
    });
});

describe('Dictionary.mapC()', () => {
    it('should map the values with the given function', () => {
        assert.deepEqual(mapC(String)(dict), expected);
    });
});
