import { empty } from './';

describe(empty, () => {
    it('should return a new empty dictionary', () => {
        expect(empty()).toEqual({});
    });
});
