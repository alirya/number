import Positive from '../../dist/boolean/positive';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});


it(`positive integer`, () => {
    expect(Positive(1)).toBeTrue();
});

it(`negative integer`, () => {
    expect(Positive(-1)).toBeFalse();
});

it(`positive float`, () => {
    expect(Positive(1.1)).toBeTrue();
});

it(`negative float`, () => {
    expect(Positive(-1.1)).toBeFalse();
});

it(`positive infinity`, () => {
    expect(Positive(Infinity)).toBeTrue();
});

it(`negative infinity`, () => {
    expect(Positive(-Infinity)).toBeFalse();
});

it(`Nan`, () => {
    expect(Positive(NaN)).toBeFalse();
});

