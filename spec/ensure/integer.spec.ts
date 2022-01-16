import Integer from '../../dist/ensure/integer';

it('enable console log', () => {spyOn(console, 'log').and.callThrough();});

it(`integer`, () => {
    expect(Integer(1)).toBe(1);
});

it(`float`, () => {
    try {
        Integer(1.1);
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});

it(`infinity`, () => {
    try {
        Integer(Infinity);
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


