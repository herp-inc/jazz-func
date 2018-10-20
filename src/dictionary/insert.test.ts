import { insert, insertC } from './';

describe(insert, () => {
    it('should insert an element to the dictionary', () => {
        expect(insert('foo', 42, {})).toEqual({ foo: 42 });
    });
});

describe(insertC, () => {
    it('should insert an element to the dictionary', () => {
        expect(insertC('foo')(42)({})).toEqual({ foo: 42 });
    });
});
