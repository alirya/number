import Negative from '../../dist/assert/negative.js';

it('enable console log', () => {spyOn(console, 'log').and.callThrough();});

it(`negative integer`, () => {
    const value = -1;
    Negative(value);
    expect(value).toBe(-1);
});

it(`positive integer`, () => {
    try {
        Negative(1);
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});

it(`positive float`, () => {
    try {
        Negative(1.1);
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});

it(`negative float`, () => {
    const value = -1.1;
    Negative(value);
    expect(value).toBe(-1.1);
});


it(`positive infinity`, () => {
    try {
        Negative(Infinity);
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});

it(`negative infinity`, () => {
    const value = -Infinity;
    Negative(value);
    expect(value).toBe(-Infinity);
});

it(`Nan`, () => {
    try {
        Negative(NaN);
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});


