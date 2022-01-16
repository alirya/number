import Finite from '../../dist/assert/finite';

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
    let value = 1.1;
    Finite(value);
    expect(value).toBe(1.1);
});

it(`negative float`, () => {
    let value = -1.1;
    Finite(value);
    expect(value).toBe(-1.1);
});

it(`positive integer`, () => {
    let value = 1;
    Finite(value);
    expect(value).toBe(1);
});

it(`negative integer`, () => {
    let value = -1;
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




