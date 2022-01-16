import Lower from '../../dist/assert/lower';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

describe(`inclusive`,function() {

    it(`lower with limit`, () => {
        expect(Lower(0, 1, false)).toBeUndefined();
        expect(Lower(0, 10, false)).toBeUndefined();
    });

    it(`equal with limit`, () => {
        expect(Lower(0, 0,true)).toBeUndefined();
        expect(Lower(10, 10,true)).toBeUndefined();
    });

    it(`greater than limit`, () => {
        try {
            Lower(1, 0,true);
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }

        try {
            Lower(15, 10,true);
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }
    });
});

describe(`exclusive`,function() {

    it(`lower with limit`, () => {
        expect(Lower(0, 1, false)).toBeUndefined();
        expect(Lower(0, 10, false)).toBeUndefined();
    });

    it(`equal with limit`, () => {

        try {
            Lower(1, 1,false);
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }

        try {
            Lower(10, 10,false);
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }
    });

    it(`greater than limit`, () => {

        try {
            Lower(1, 0,false);
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }

        try {
            Lower(15, 10,false);
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }
    });
});




