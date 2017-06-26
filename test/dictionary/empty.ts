import 'mocha';
import * as assert from 'power-assert';
import { empty } from '../../src/dictionary';

describe('Dictionary.empty()', () => {
    it('should return a new empty dictionary', () => {
        assert.deepEqual(empty(), {});
    });
});
