import NUmeric from '../../dist/ensure/numeric';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

describe(`number`,function() {

    it(`integer`, () => {
        expect(NUmeric(1)).toBe(1);
    });

    it(`float`, () => {
        expect(NUmeric(1.1)).toBe(1.1);
    });

    it(`infinity`, () => {
        expect(NUmeric(Infinity)).toBe(Infinity);
    });

    it(`Nan`, () => {
        expect(NUmeric(NaN)).toEqual(NaN);
    });
});

describe(`numeric string`,function() {

    it(`integer`, () => {
        expect(NUmeric('1')).toBe('1');
    });

    it(`float`, () => {
        expect(NUmeric('1.1')).toBe('1.1');
    });
});

describe('boolean', function() {

    it(`true`, () => {
        try {
            NUmeric(true);
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }
    });

    it(`false`, () => {
        try {
            NUmeric(false);
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }
    });

});

describe('string', function() {

    it(`primitive`, () => {
        try {
            NUmeric('str');
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }
    });

    it(`object`, () => {
        try {
            NUmeric(new String('str'));
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }
    });

});

describe('object', function() {

    it(`plain`, () => {
        try {
            NUmeric({});
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }
    });

    it(`instance`, () => {
        try {
            NUmeric(new Map());
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }
    });

});

describe('function', function() {

    it(`anonymous `, () => {
        try {
            NUmeric(function () {});
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }
    });

    it(`anonymous arrow`, () => {
        try {
            NUmeric(()=>{});
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }
    });

    it(`named`, () => {
        try {
            NUmeric(isNaN);
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }
    });

});

describe('empty', function() {

    it(`null `, () => {
        try {
            NUmeric(null);
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }
    });

    it(`undefined`, () => {
        try {
            NUmeric(undefined);
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }
    });

});



