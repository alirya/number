import Nan from '../../dist/assert/nan.js';

it('enable console log', () => {spyOn(console, 'log').and.callThrough();});

it(`positive infinity`, () => {
    const value = NaN;
    Nan(value);
    expect(value).toEqual(NaN);
});


it(`negative integer`, () => {
    try {
        Nan(-1);
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});

it(`positive integer`, () => {
    try {
        Nan(1);
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});

it(`positive float`, () => {
    try {
        Nan(-1.1);
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});

it(`positive float`, () => {
    try {
        Nan( 1.1);
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});


it(`negative infinity`, () => {
    try {
        Nan(-Infinity);
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});

it(`positive infinity`, () => {
    try {
        Nan(Infinity);
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});




