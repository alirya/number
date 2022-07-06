import Infinite from '../../dist/ensure/infinite.js';

it('enable console log', () => {spyOn(console, 'log').and.callThrough();});

it(`positive infinity`, () => {
    expect(Infinite(Infinity)).toBe(Infinity);
});

it(`negative infinity`, () => {
    expect(Infinite(-Infinity)).toBe(-Infinity);
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




