import 'mocha';
import * as assert from 'power-assert';
import { empty, fullOuterJoin, keys } from '../../src/dictionary';

describe('Dictionary.fullOuterJoin()', () => {
    it('should behave like FULL OUTER JOIN', () => {
        const left = { foo: 'hello', bar: 'world' };
        const right = { foo: 0, baz: 42 };

        const expected = { foo: ['hello', 0], bar: ['world', null], baz: [null, 42] };

        assert.deepEqual(fullOuterJoin(left, right), expected);
    });

    it('should return an empty dictionary when both the left and the right are empty', () => {
        const left = empty();
        const right = empty();

        assert.deepEqual(fullOuterJoin(left, right), empty())
    });

    it('should return a dictionary having the same keys as the left when the right is empty', () => {
        const left = { foo: 6, bar: 28, baz: 496 };
        const right = empty();

        assert.deepEqual(keys(fullOuterJoin(left, right)), keys(left));
    });

    it('should return a dictionary having the same keys as the right when the left is empty', () => {
        const left = empty();
        const right = { foo: 6, bar: 28, baz: 496 };

        assert.deepEqual(keys(fullOuterJoin(left, right)), keys(right));
    });
});
