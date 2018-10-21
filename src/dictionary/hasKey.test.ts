import { empty, hasKey, hasKeyC } from './';
import { Dictionary } from './';

describe(hasKey, () => {
    it('should return true when the key is present in the given dictionary', () => {
        expect(hasKey('foo', { foo: 42 })).toBe(true);
    });

    it('should return false when the key is not present in the given dictionary', () => {
        expect(hasKey('foo', empty())).toBe(false);
    });

    it('should behave as a type guard', () => {
        const dict: Dictionary<number> = { x: 0, y: 42 };

        if (hasKey('x', dict)) {
            const record: Record<'x', number> = dict; // this should typecheck
            expect(record.x).toBe(0);

            const anotherDict: Dictionary<number> = dict; // it still behaves as a dictionary
            expect(anotherDict.y).toBe(42);
        }
    });
});

describe(hasKeyC, () => {
    it('should return true when the key is present in the given dictionary', () => {
        expect(hasKeyC('foo')({ foo: 42 })).toBe(true);
    });

    it('should return false when the key is not present in the given dictionary', () => {
        expect(hasKeyC('foo')(empty())).toBe(false);
    });

    it('should behave as a type guard', () => {
        const dict: Dictionary<number> = { x: 0, y: 42 };

        if (hasKeyC<number, 'x'>('x')(dict)) {
            const record: Record<'x', number> = dict; // this should typecheck
            expect(record.x).toBe(0);

            const anotherDict: Dictionary<number> = dict; // it still behaves as a dictionary
            expect(anotherDict.y).toBe(42);
        }
    });
});
