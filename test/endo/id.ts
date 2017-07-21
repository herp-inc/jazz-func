import 'mocha';
import * as assert from 'power-assert';
import { Endo, id } from '../../src/endo';

describe('Endo.id()', () => {
    it('should return the passed argument', () => {
        const x = { foo: 42 };

        assert.equal(id(x), x);
    });

    it('should behave as Endo<T>', () => {
        function takingEndoT<T>(_: Endo<T>) {}

        takingEndoT(id);
    });
});
