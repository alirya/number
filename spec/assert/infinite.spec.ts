import Infinite from '../../dist/assert/infinite.js';

it('enable console log', () => {spyOn(console, 'log').and.callThrough();});

it(`positive infinity`, () => {
    const value = Infinity;
    Infinite(value);
    expect(value).toBe(Infinity);
});

it(`negative infinity`, () => {
    const value = -Infinity;
    Infinite(value);
    expect(value).toBe(-Infinity);
});

it(`float`, () => {
    try {
        Infinite(1.1);
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});

it(`integer`, () => {
    try {
        Infinite(1);
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});

it(`Nan`, () => {
    try {
        Infinite(NaN);
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});




