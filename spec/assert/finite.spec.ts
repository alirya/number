import Finite from '../../dist/assert/finite.js';

it('enable console log', () => {spyOn(console, 'log').and.callThrough();});

it(`positive infinity`, () => {
    try {
        Finite(Infinity);
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});

it(`negative infinity`, () => {
    try {
        Finite(-Infinity);
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});

it(`positive float`, () => {
    const value = 1.1;
    Finite(value);
    expect(value).toBe(1.1);
});

it(`negative float`, () => {
    const value = -1.1;
    Finite(value);
    expect(value).toBe(-1.1);
});

it(`positive integer`, () => {
    const value = 1;
    Finite(value);
    expect(value).toBe(1);
});

it(`negative integer`, () => {
    const value = -1;
    Finite(value);
    expect(value).toBe(-1);
});

it(`Nan`, () => {
    try {
        Finite(NaN);
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});




