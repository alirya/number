import {FiniteParameters} from '../../../dist/assert/string/finite';

it('enable console log', () => {spyOn(console, 'log').and.callThrough();});


it(`valid`, () => {
    expect(FiniteParameters(Infinity, true)).toBe('value is finite number.');
});

it(`invalid`, () => {
    expect(FiniteParameters(1, false)).toBe('value must finite number, actual "1".');
});
