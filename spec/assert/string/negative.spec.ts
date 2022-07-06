import {NegativeParameters} from '../../../dist/assert/string/negative.js';

it('enable console log', () => {spyOn(console, 'log').and.callThrough();});

it(`valid`, () => {
    expect(NegativeParameters(Infinity, true)).toBe('value is negative number.');
});

it(`invalid`, () => {
    expect(NegativeParameters(1, false)).toBe('value must negative number, actual "1".');
});
