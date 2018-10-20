import { keys } from './';

describe(keys, () => {
    it('should return the keys in the given dictionary', () => {
        expect(keys({ foo: 0, bar: 0 })).toEqual(['foo', 'bar']);
    });
});
