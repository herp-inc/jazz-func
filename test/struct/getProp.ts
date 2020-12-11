import 'mocha';
import * as assert from 'power-assert';
import { getProp, getPropC } from '../../src/struct';

type Point = {
    x: number;
    y: number;
}

const origin: Point = { x: 0, y: 0 };

describe('Struct.getProp()', () => {
    it('should get the value in the given property name', () => {
        assert.equal(getProp('x', origin), 0);
    });
});

describe('Struct.getPropC()', () => {
    it('should get the value in the given property name', () => {
        assert.equal(getPropC<Point, 'x'>('x')(origin), 0);
    });
});
