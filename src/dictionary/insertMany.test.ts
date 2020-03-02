import { insertMany, insertManyC } from './';

describe(insertMany, () => {
    it('should insert elements to the dictionary', () => {
        expect(insertMany([['x', 5], ['y', 3]], { z: 6 })).toEqual({
            x: 5,
            y: 3,
            z: 6,
        });
    });

    it('should overwrite if exist', () => {
        expect(insertMany([['x', 5], ['y', 3]], { x: 10, y: 7 })).toEqual({
            x: 5,
            y: 3,
        });
    });
});

describe(insertManyC, () => {
    it('should insert elements to the dictionary', () => {
        expect(insertManyC([['x', 5], ['y', 3]])({ x: 10, y: 7 })).toEqual({
            x: 5,
            y: 3,
        });
    });
});
