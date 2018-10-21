import { Dictionary, map, mapC } from './';

const dict: Dictionary<number> = {
    zero: 0,
    one: 1,
};

const expected: Dictionary<string> = {
    zero: '0',
    one: '1',
};

describe(map, () => {
    it('should map the values with the given funciton', () => {
        expect(map(String, dict)).toEqual(expected);
    });
});

describe(mapC, () => {
    it('should map the values with the given function', () => {
        expect(mapC(String)(dict)).toEqual(expected);
    });
});
