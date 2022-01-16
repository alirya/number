import Infinite from '../../dist/boolean/infinite';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it(`infinite`, () => {
    expect(Infinite(1)).toBeFalse();
});

it(`float`, () => {
    expect(Infinite(1.1)).toBeFalse();
});

it(`positive infinity`, () => {
    expect(Infinite(Infinity)).toBeTrue();
});

it(`negative infinity`, () => {
    expect(Infinite(-Infinity)).toBeTrue();
});

it(`Nan`, () => {
    expect(Infinite(NaN)).toBeFalse();
});

