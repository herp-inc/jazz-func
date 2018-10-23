import { modify, modifyC } from './';

describe(modify, () => {
    it('should modify the value in the given key with the given function', () => {
        const dict = { foo: 0, bar: 42 };
        const expected = { foo: 0, bar: 84 };

        expect(modify('bar', n => n * 2, dict)).toEqual(expected);
    });

    it('should return the given dictionary itself when the key is not present in the dictionary', () => {
        const dict = { foo: 0, bar: 42 };

        expect(modify('baz', n => n * 2, dict)).toEqual(dict);
    });
});

describe(modifyC, () => {
    it('should modify the value in the given key with the given function', () => {
        const dict = { foo: 0, bar: 42 };
        const expected = { foo: 0, bar: 84 };

        expect(modifyC<number>('bar')(n => n * 2)(dict)).toEqual(expected);
    });

    it('should return the given dictionary itself when the key is not present in the dictionary', () => {
        const dict = { foo: 0, bar: 42 };

        expect(modifyC<number>('baz')(n => n * 2)(dict)).toEqual(dict);
    });
});
