import { Dictionary, mapWithKey, mapWithKeyC } from './';

const dict: Dictionary<number> = {
    zero: 0,
    one: 1
};

const expected: Dictionary<string> = {
    zero: 'zero: 0',
    one: 'one: 1'
};

describe(mapWithKey, () => {
    it('should map the values with the given function which also takes a key', () => {
        expect(mapWithKey((k, v) => `${k}: ${v}`, dict)).toEqual(expected);
    });
});

describe(mapWithKeyC, () => {
    it('should map the values with the given function which also takes a key', () => {
        expect(mapWithKeyC((k, v) => `${k}: ${v}`)(dict)).toEqual(expected);
    });
});
