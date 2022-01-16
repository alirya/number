import Natural from '../../dist/boolean/natural';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it(`natural`, () => {
    expect(Natural(1)).toBeTrue();
});

it(`float`, () => {
    expect(Natural(1.1)).toBeFalse();
});

it(`positive infinity`, () => {
    expect(Natural(Infinity)).toBeFalse();
});

it(`negative infinity`, () => {
    expect(Natural(-Infinity)).toBeFalse();
});

it(`Nan`, () => {
    expect(Natural(NaN)).toBeFalse();
});

it(`zero`, () => {
    expect(Natural(0)).toBeTrue();
});

