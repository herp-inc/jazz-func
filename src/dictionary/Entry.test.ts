import { Entry } from './';

describe(Entry, () => {
    it('should return Entry with the given funciton', () => {
        expect(Entry('a', 2)).toEqual(['a', 2]);
    });
});
