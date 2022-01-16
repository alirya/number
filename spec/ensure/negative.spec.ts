import Negative from '../../dist/ensure/negative';

it('enable console log', () => {spyOn(console, 'log').and.callThrough();});

it(`negative integer`, () => {
    expect(Negative(-1)).toBe(-1);
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
    expect(Negative(-1.1)).toBe(-1.1);
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
    expect(Negative(-Infinity)).toBe(-Infinity);
});

it(`Nan`, () => {
    try {
        Negative(NaN);
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});


