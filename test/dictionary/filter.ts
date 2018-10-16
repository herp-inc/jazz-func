import 'mocha';
import * as assert from 'power-assert';
import { Dictionary, filter, filterC } from '../../src/dictionary';

const dict: Dictionary<number> = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
};

const expected: Dictionary<number> = {
    zero: 0,
    two: 2,
    four: 4
}

describe('Dictionary.filter()', () => {
    it('should filter out elements', () => {
        assert.deepEqual(filter(n => n % 2 === 0, dict), expected);
    });

    it('should return subtyped dictionary when passed a type predicate', () => {
        const dict: Dictionary<number | string> = {
            foo: 6,
            bar: '28',
            baz: 496
        };
        function isNumber(x: any): x is number {
            return typeof x === 'number';
        }
        function takesNumberDictionary(_: Dictionary<number>): void {}

        takesNumberDictionary(filter<number, number | string>(isNumber, dict)); // typechecks
    });
});

describe('Dictionary.filterC()', () => {
    it('should filter out elements', () => {
        assert.deepEqual(filterC<number>(n => n % 2 === 0)(dict), expected);
    });

    it('should return subtyped dictionary when passed a type predicate', () => {
        const dict: Dictionary<number | string> = {
            foo: 6,
            bar: '28',
            baz: 496
        };
        function isNumber(x: any): x is number {
            return typeof x === 'number';
        }
        function takesNumberDictionary(_: Dictionary<number>): void {}

        takesNumberDictionary(filterC<number, number | string>(isNumber)(dict)); // typechecks
    });
});

