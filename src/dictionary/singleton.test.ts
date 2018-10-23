import { singleton, singletonC } from './';

describe(singleton, () => {
    it('should create a new dictionary containing the given key/value', () => {
        expect(singleton('foo', 42)).toEqual({ foo: 42 });
    });
});

describe(singletonC, () => {
    it('should create a new dictionary containing the given key/value', () => {
        expect(singletonC('foo')(42)).toEqual({ foo: 42 });
    });
});
