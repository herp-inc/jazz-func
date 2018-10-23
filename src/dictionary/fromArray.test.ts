import { fromArray } from './';

describe(fromArray, () => {
    it('should create a new dictionary from a key-value array', () => {
        expect(fromArray([
            ['zero', 0],
            ['one', 1],
            ['two', 2]
        ])).toEqual({
            zero: 0,
            one: 1,
            two: 2
        });
    });
});
