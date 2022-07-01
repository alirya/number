import {PositiveParameters} from '../../../dist/assert/string/positive';

it('enable console log', () => {spyOn(console, 'log').and.callThrough();});

it(`valid`, () => {
    expect(PositiveParameters(Infinity, true)).toBe('value is positive number.');
});

it(`invalid`, () => {
    expect(PositiveParameters(1, false)).toBe('value must positive number, actual "1".');
});
