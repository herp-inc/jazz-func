import { remove, removeC } from './';

const dict = { foo: 0, bar: 42 };

describe(remove, () => {
    it('should remove the value associated with the given key', () => {
        expect(remove('foo', dict)).toEqual({ bar: 42 });
    });

    it('should do nothing on a dictionary without the given key', () => {
        expect(remove('baz', dict)).toEqual(dict);
    });
});

describe(removeC, () => {
    it('should remove the value associated with the given key', () => {
        expect(removeC('foo')(dict)).toEqual({ bar: 42 });
    });

    it('should do nothing on a dictionary without the given key', () => {
        expect(removeC('baz')(dict)).toEqual(dict);
    });
});
