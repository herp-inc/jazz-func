import 'mocha';
import * as assert from 'power-assert';
import { defaultTo, defaultToC } from '../../src/nullable/defaultTo';


describe('Nullable.defaultTo', () => {
    const num: number = 42;
    it('should defaultTo return first argument with null', () => {
        assert.equal(defaultTo(num, null), 42);
    });

    it('should defaultTo return second argument with non-null value', () => {
        assert.equal(defaultTo(num, 34), 34);
    });
});

describe('Nullable.defaultToC', () => {
    const num: number = 42;

    it('should defaultTo return first argument with null', () => {
        assert.equal(defaultToC(num)(null), 42);
    });

    it('should defaultTo return second argument with non-null value', () => {
        assert.equal(defaultToC(num)(34), 34);
    });
});
