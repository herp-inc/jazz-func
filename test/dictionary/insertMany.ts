import 'mocha';
import * as assert from 'power-assert';
import { insertMany } from '../../src/dictionary/insertMany';

describe('Dictionary.insertMany()', () => {
    it('should insert elements to the dictionary', () => {
        assert.deepEqual(insertMany([['x', 5], ['y', 3]], {z: 6}), {
            x: 5,
            y: 3,
            z: 6
        });
    });

    it('should overwrite if exist', () => {
        assert.deepEqual(insertMany([['x', 5], ['y', 3]], {x: 10, y: 7}), {
            x: 5,
            y: 3
        });
    });
});
