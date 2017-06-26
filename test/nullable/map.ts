import 'mocha';
import * as assert from 'power-assert';
import { map, mapC } from '../../src/nullable';

function show(n: number): string {
    return String(n);
}

describe('Nullable.map', () => {
    it('should map non-null values with the given function', () => {
        assert.equal(map(show, 42), '42');
    });

    it('should map null to null', () => {
        assert.equal(map(show, null), null);
    });
});

describe('Nullable.mapC', () => {
    it('should map non-null values with the given function', () => {
        assert.equal(mapC(show)(42), '42');
    });

    it('should map null to null', () => {
        assert.equal(mapC(show)(null), null);
    });
});
