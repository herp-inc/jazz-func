import 'mocha';
import * as assert from 'power-assert';
import { insert, insertC } from '../../src/dictionary';

describe('Dictionary.insert()', () => {
    it('should insert an element to the dictionary', () => {
        assert.deepEqual(insert('foo', 42, {}), { foo: 42 });
    });
});

describe('Dictionary.insertC()', () => {
    it('should insert an element to the dictionary', () => {
        assert.deepEqual(insertC('foo')(42)({}), { foo: 42 });
    });
});
