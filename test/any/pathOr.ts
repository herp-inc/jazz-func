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
});
