import 'mocha';
import * as assert from 'power-assert';
import { empty, innerJoin, innerJoinC } from '../../src/dictionary';

describe('dictionary.innerJoin()', () => {
    it('should behave like inner join', () => {
        const left = {
            foo: 'hello',
            bar: 'world'
        };

        const right = {
            foo: 0,
            baz: 42
        };

        const expected = {
            foo: ['hello', 0]
        };

        assert.deepEqual(innerJoin(left, right), expected);
    });

    it('should return an empty dictionary when the left is empty', () => {
        const left = empty();
        const right = { foo: 0, bar: 1, baz: 2 };

        assert.deepEqual(innerJoin(left, right), empty());
    });

    it('should return an empty dictionary when the right is empty', () => {
        const left = { foo: 0, bar: 1, baz: 2 };
        const right = empty();

        assert.deepEqual(innerJoin(left, right), empty());
    });
});

describe('dictionary.innerJoinC()', () => {
    it('should behave like inner join', () => {
        const left = {
            foo: 'hello',
            bar: 'world'
        };

        const right = {
            foo: 0,
            baz: 42
        };

        const expected = {
            foo: ['hello', 0]
        };

        assert.deepEqual(innerJoinC(left)(right), expected);
    });

    it('should return an empty dictionary when the left is empty', () => {
        const left = empty();
        const right = { foo: 0, bar: 1, baz: 2 };

        assert.deepEqual(innerJoinC(left)(right), empty());
    });

    it('should return an empty dictionary when the right is empty', () => {
        const left = { foo: 0, bar: 1, baz: 2 };
        const right = empty();

        assert.deepEqual(innerJoinC(left)(right), empty());
    });
});

