import 'mocha';
import * as assert from 'power-assert';
import { Dictionary, mapWithKey, mapWithKeyC } from '../../src/dictionary';

const dict: Dictionary<number> = {
    zero: 0,
    one: 1
};

const expected: Dictionary<string> = {
    zero: 'zero: 0',
    one: 'one: 1'
};

describe('Dictionary.mapWithKey()', () => {
    it('should map the values with the given function which also takes a key', () => {
        assert.deepEqual(mapWithKey((k, v) => `${k}: ${v}`, dict), expected);
    });
});

describe('Dictionary.mapWithKeyC()', () => {
    it('should map the values with the given function which also takes a key', () => {
        assert.deepEqual(mapWithKeyC((k, v) => `${k}: ${v}`)(dict), expected);
    });
});
