import { Endo, id } from './';

describe(id, () => {
    it('should return the passed argument', () => {
        const x = { foo: 42 };

        expect(id(x)).toEqual(x);
    });

    it('should behave as Endo<T>', () => {
        function takingEndoT<T>(_: Endo<T>) {}

        takingEndoT(id);
    });
});
