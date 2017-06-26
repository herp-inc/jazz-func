import 'mocha';
import * as assert from 'power-assert';
import { singleton, singletonC } from '../../src/dictionary';

describe('Dictionary.singleton()', () => {
    it('should create a new dictionary containing the given key/value', () => {
        assert.deepEqual(singleton('foo', 42), { foo: '42' });
    });
});

describe('Dictionary.singletonC()', () => {
    it('should create a new dictionary containing the given key/value', () => {
        assert.deepEqual(singletonC('foo')(42), { foo: '42' });
    });
});
