import 'mocha';
import * as assert from 'power-assert';
import { setProp, setPropC } from '../../src/struct';

type Point = {
    x: number;
    y: number;
}

const origin: Point = { x: 0, y: 0 };

describe('Struct.setProp()', () => {
    it('should set the value to the property', () => {
        const point = setProp('x', 42, origin);

        assert.equal(point.x, 42);
    });
});

describe('Struct.setPropC()', () => {
    it('should set the value to the property', () => {
        const point = setPropC<Point, 'x'>('x')(42)(origin);

        assert.equal(point.x, 42);
    });
});
