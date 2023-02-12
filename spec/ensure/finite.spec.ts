import Finite from '../../dist/ensure/finite.js';

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

it(`float`, () => {
    expect(Finite(1.1)).toBe(1.1);
});

it(`integer`, () => {
    expect(Finite(1)).toBe(1);
});

it(`Nan`, () => {
    try {
        Finite(NaN);
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});




