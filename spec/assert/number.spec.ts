import Number from '../../dist/assert/number';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

describe(`number`,function() {

    it(`integer`, () => {
        let value = 1;
        Number(value);
        expect(value).toBe(1);
    });

    it(`float`, () => {
        let value = 1.1;
        Number(value);
        expect(value).toBe(1.1);
    });

    it(`infinity`, () => {
        let value = Infinity;
        Number(Infinity);
        expect(value).toBe(Infinity);
    });

    it(`Nan`, () => {
        let value = NaN;
        Number(NaN);
        expect(value).toEqual(NaN);
    });
});

describe('boolean', function() {

    it(`true`, () => {
        try {
            Number(true);
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }
    });

    it(`false`, () => {
        try {
            Number(false);
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }
    });

});

describe('string', function() {

    it(`primitive`, () => {
        try {
            Number('str');
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }
    });

    it(`object`, () => {
        try {
            Number(new String('str'));
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }
    });

});

describe('object', function() {

    it(`plain`, () => {
        try {
            Number({});
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }
    });

    it(`instance`, () => {
        try {
            Number(new Map());
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }
    });

});

describe('function', function() {

    it(`anonymous `, () => {
        try {
            Number(function () {});
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }
    });

    it(`anonymous arrow`, () => {
        try {
            Number(()=>{});
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }
    });

    it(`named`, () => {
        try {
            Number(isNaN);
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }
    });

});

describe('empty', function() {

    it(`null `, () => {
        try {
            Number(null);
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }
    });

    it(`undefined`, () => {
        try {
            Number(undefined);
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }
    });

});



