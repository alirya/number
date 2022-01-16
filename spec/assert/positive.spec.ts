import Positive from '../../dist/assert/positive';

it('enable console log', () => {spyOn(console, 'log').and.callThrough();});

it(`positive integer`, () => {
    let value = 1;
    Positive(value);
    expect(value).toBe(1);
});

it(`negative integer`, () => {
    try {
        Positive(-1);
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});

it(`negative float`, () => {
    try {
        Positive(-1.1);
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});

it(`positive float`, () => {
    let value = 1.1;
    Positive(value);
    expect(value).toBe(1.1);
});


it(`positive infinity`, () => {
    try {
        Positive(-Infinity);
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});

it(`positive infinity`, () => {
    let value = Infinity;
    Positive(value);
    expect(value).toBe(Infinity);
});

it(`Nan`, () => {
    try {
        Positive(NaN);
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});


