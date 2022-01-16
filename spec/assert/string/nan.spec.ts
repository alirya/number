import Nan from '../../../dist/assert/string/nan-parameters';

it('enable console log', () => {spyOn(console, 'log').and.callThrough();});


it(`valid`, () => {
    expect(Nan(Infinity, true)).toBe('value is NaN.');
});

it(`invalid`, () => {
    expect(Nan(1, false)).toBe('value must NaN, actual "1".');
});

