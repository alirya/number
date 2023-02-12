import Greater from '../../dist/ensure/greater.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

describe(`inclusive`,function() {

    it(`lower with limit`, () => {
        try {
            Greater(0, 1, false);
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }
        try {
            Greater(0, 10, false);
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }
    });

    it(`equal with limit`, () => {
        expect(Greater(0, 0,true)).toBe(0);
        expect(Greater(10, 10,true)).toBe(10);
    });

    it(`greater than limit`, () => {
        expect(Greater(1, 0,true)).toBe(1);
        expect(Greater(15, 10,true)).toBe(15);
    });
});

describe(`exclusive`,function() {

    it(`lower with limit`, () => {

        try {
            Greater(0, 1, false);
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }
        try {
            Greater(0, 10, false);
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }
    });

    it(`equal with limit`, () => {
        try {
            Greater(1, 1,false);
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }
        try {
            Greater(10, 10,false);
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }
    });

    it(`greater than limit`, () => {
        expect(Greater(1, 0,false)).toBe(1);
        expect(Greater(15, 10,false)).toBe(15);
    });
});




