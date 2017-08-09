import 'mocha';
import * as assert from 'power-assert';
import { pathOr } from '../../src/any/pathOr';

describe('pathOr', () => {
    it('should return a empty array length', () => {
        const l = pathOr(['length'], 9, []);
        assert.deepEqual(l, 0);
    });

    it('should return a 9', () => {
        const l = pathOr(['length'], 9, {});
        assert.deepEqual(l, 9);
    });

    it('should return number from String.length', () => {
        const l = pathOr(['length'], 6, "hiroqn");
        assert.deepEqual(l, 6);
    });

    it('should return a 0', () => {
        const l = pathOr(['length', 'xxxx'], 0, "hiroqn");
        assert.deepEqual(l, 0);
    });
});
