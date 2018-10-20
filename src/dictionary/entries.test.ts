import { Dictionary, entries } from './';

describe(entries, () => {
    it('should return an array of key/value tuples', () => {
        const dict: Dictionary<number> = {
            zero: 0,
            one: 1,
            two: 2,
        };

        expect(entries(dict)).toEqual([
            ['zero', 0],
            ['one', 1],
            ['two', 2]
        ]);
    });
});
