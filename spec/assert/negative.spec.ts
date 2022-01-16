import Negative from '../../dist/assert/negative';

it('enable console log', () => {spyOn(console, 'log').and.callThrough();});

it(`negative integer`, () => {
    let value = -1;
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
    let value = -1.1;
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
    let value = -Infinity;
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


