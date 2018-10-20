import { values } from './';

describe(values, () => {
    it('should return the values contained in the given dictionary', () => {
        expect(values({ foo: 0, bar: 42 })).toEqual([0, 42]);
    });
});
