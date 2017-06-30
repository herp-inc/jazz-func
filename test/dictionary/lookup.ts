import 'mocha';
import * as assert from 'power-assert';
import { lookup, lookupC } from '../../src/dictionary';

describe('Dictionary.lookup()', () => {
    it('should look up the value associated to the given key', () => {
        assert.equal(lookup('foo', { foo: 42, bar: 0 }), 42);
    });

    it('should return null when the key is not found', () => {
        assert.equal(lookup('foo', { bar: 0 }), null);
    });
});

describe('Dictionary.lookupC()', () => {
    it('should look up the value associated to the given key', () => {
        assert.equal(lookupC('foo')({ foo: 42, bar: 0 }), 42);
    });

    it('should return null when the key is not found', () => {
        assert.equal(lookupC('foo')({ bar: 0 }), null);
    });
});
