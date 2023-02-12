import {IntegerParameters} from '../../../dist/assert/string/integer.js';

it('enable console log', () => {spyOn(console, 'log').and.callThrough();});

it(`valid`, () => {
    expect(IntegerParameters(Infinity, true)).toBe('value is integer number.');
});

it(`invalid`, () => {
    expect(IntegerParameters(1, false)).toBe('value must integer number, actual "1".');
});
