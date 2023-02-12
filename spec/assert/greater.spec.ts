import Greater from '../../dist/assert/greater.js';

it('enable console log', () => {spyOn(console, 'log').and.callThrough();});


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
        expect(Greater(0, 0,true)).toBeUndefined();
        expect(Greater(10, 10,true)).toBeUndefined();
    });

    it(`greater than limit`, () => {
        expect(Greater(1, 0,true)).toBeUndefined();
        expect(Greater(15, 10,true)).toBeUndefined();
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
        expect(Greater(1, 0,false)).toBeUndefined();
        expect(Greater(15, 10,false)).toBeUndefined();
    });
});

