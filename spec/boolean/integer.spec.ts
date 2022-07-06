import Integer from '../../dist/boolean/integer.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});


it(`positive integer`, () => {
    expect(Integer(1)).toBeTrue();
});

it(`negative integer`, () => {
    expect(Integer(-1)).toBeTrue();
});

it(`positive float`, () => {
    expect(Integer(1.1)).toBeFalse();
});

it(`negative float`, () => {
    expect(Integer(-1.1)).toBeFalse();
});

it(`positive infinity`, () => {
    expect(Integer(Infinity)).toBeFalse();
});

it(`negative infinity`, () => {
    expect(Integer(-Infinity)).toBeFalse();
});

it(`Nan`, () => {
    expect(Integer(NaN)).toBeFalse();
});

