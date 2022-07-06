import Integer from '../../dist/assert/integer.js';

it('enable console log', () => {spyOn(console, 'log').and.callThrough();});

it(`negative integer`, () => {
    let value = -1;
    Integer(value);
    expect(value).toBe(-1);
});

it(`positive integer`, () => {
    let value = 1;
    Integer(value);
    expect(value).toBe(1);
});

it(`positive float`, () => {
    try {
        Integer(1.1);
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});

it(`negative float`, () => {
    try {
        Integer(-1.1);
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});

it(`positive infinity`, () => {
    try {
        Integer(Infinity);
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});

it(`negative infinity`, () => {
    try {
        Integer(-Infinity);
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});

it(`Nan`, () => {
    try {
        Integer(NaN);
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});


