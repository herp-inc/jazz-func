import 'mocha';
import * as assert from 'power-assert';
import { empty, leftOuterJoin, leftOuterJoinC } from '../../src/dictionary';

describe('Dictionary.leftOuterJoin()', () => {
    it('should behave like LEFT OUTER JOIN', () => {
        const left = { foo: 0, bar: 42 };
        const right = { foo: 'hello', baz: 'world' };

        const expected = { foo: [0, 'hello'], bar: [42, null] };

        assert.deepEqual(leftOuterJoin(left, right), expected);
    });

    it('should return a empty dictionary when the left is empty', () => {
        const left = empty();
        const right = { foo: 0, bar: 1, baz: 2 };

        assert.deepEqual(leftOuterJoin(left, right), empty());
    });
});

describe('Dictionary.leftOuterJoinC()', () => {
    it('should behave like LEFT OUTER JOIN', () => {
        const left = { foo: 0, bar: 42 };
        const right = { foo: 'hello', baz: 'world' };

        const expected = { foo: [0, 'hello'], bar: [42, null] };

        assert.deepEqual(leftOuterJoinC(left)(right), expected);
    });

    it('should return a empty dictionary when the left is empty', () => {
        const left = empty();
        const right = { foo: 0, bar: 1, baz: 2 };

        assert.deepEqual(leftOuterJoinC(left)(right), empty());
    });
});
