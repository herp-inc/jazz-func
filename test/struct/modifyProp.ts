import 'mocha';
import * as assert from 'power-assert';
import { modifyProp, modifyPropC } from '../../src/struct';

type Point = {
    x: number;
    y: number;
}

const origin: Point = { x: 0, y: 0 };

describe('Struct.modifyProp()', () => {
    it('should modify the value in the property with the given function', () => {
        const point = modifyProp('x', x => x + 42, origin);

        assert.equal(point.x, 42);
    });
});

describe('Struct.modifyPropC()', () => {
    it('should modify the value in the property with the given function', () => {
        const point = modifyPropC<Point, 'x'>('x')(x => x + 42)(origin);

        assert.equal(point.x, 42);
    });

    it('should typecheck only with the first type argument', () => {
        const point = modifyPropC<Point>('x')(x => x + 42)(origin); // typechecks

        assert.equal(point.x, 42);
    })
});
