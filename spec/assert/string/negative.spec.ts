import Negative from '../../../dist/assert/string/negative-parameters';

it('enable console log', () => {spyOn(console, 'log').and.callThrough();});

it(`valid`, () => {
    expect(Negative(Infinity, true)).toBe('value is negative number.');
});

it(`invalid`, () => {
    expect(Negative(1, false)).toBe('value must negative number, actual "1".');
});
