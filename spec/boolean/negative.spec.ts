import Negative from '../../dist/boolean/negative.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});


it(`negative integer`, () => {
    expect(Negative(-1)).toBeTrue();
});

it(`negative integer`, () => {
    expect(Negative(1)).toBeFalse();
});

it(`negative float`, () => {
    expect(Negative(-1.1)).toBeTrue();
});

it(`negative float`, () => {
    expect(Negative(1.1)).toBeFalse();
});

it(`negative infinity`, () => {
    expect(Negative(-Infinity)).toBeTrue();
});

it(`negative infinity`, () => {
    expect(Negative(Infinity)).toBeFalse();
});

it(`Nan`, () => {
    expect(Negative(NaN)).toBeFalse();
});

