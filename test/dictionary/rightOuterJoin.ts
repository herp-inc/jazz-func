import 'mocha';
import * as assert from 'power-assert';
import { empty, rightOuterJoin, rightOuterJoinC } from '../../src/dictionary';

describe('Dictionary.rightOuterJoin', () => {
    it('should behave like RIGHT OUTER JOIN', () => {
        const left = { foo: 0, bar: 42 };
        const right = { foo: 'hello', baz: 'world' };

        const expected = { foo: [0, 'hello'], baz: [null, 'world'] };

        assert.deepEqual(rightOuterJoin(left, right), expected);
    });

    it('should return an empty dictionary when the right is empty', () => {
        const left = { foo: 0, bar: 1, baz: 2 };
        const right = empty();

        assert.deepEqual(rightOuterJoin(left, right), empty());
    });
});

describe('Dictionary.rightOuterJoin', () => {
    it('should behave like RIGHT OUTER JOIN', () => {
        const left = { foo: 0, bar: 42 };
        const right = { foo: 'hello', baz: 'world' };

        const expected = { foo: [0, 'hello'], baz: [null, 'world'] };

        assert.deepEqual(rightOuterJoinC(left)(right), expected);
    });

    it('should return an empty dictionary when the right is empty', () => {
        const left = { foo: 0, bar: 1, baz: 2 };
        const right = empty();

        assert.deepEqual(rightOuterJoinC(left)(right), empty());
    });
});
