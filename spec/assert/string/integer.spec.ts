import Integer from '../../../dist/assert/string/integer-parameters';

it('enable console log', () => {spyOn(console, 'log').and.callThrough();});

it(`valid`, () => {
    expect(Integer(Infinity, true)).toBe('value is integer number.');
});

it(`invalid`, () => {
    expect(Integer(1, false)).toBe('value must integer number, actual "1".');
});
