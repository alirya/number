import Number from '../../dist/boolean/number';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it(`compiler compatible`,function() {

    let a : unknown = 1;

    if(Number(a)) {

        let n : number = a;

    } else {

        // @ts-expect-error
        let n : number = a;
    }

});

describe(`number`,function() {

    it(`integer`, () => {
        expect(Number(1)).toBeTrue();
    });

    it(`float`, () => {
        expect(Number(1.1)).toBeTrue();
    });

    it(`infinity`, () => {
        expect(Number(Infinity)).toBeTrue();
    });

    it(`Nan`, () => {
        expect(Number(NaN)).toBeTrue();
    });
});

describe('boolean', function() {

    it(`true`, () => {
        expect(Number(true)).toBeFalse();
    });

    it(`false`, () => {
        expect(Number(false)).toBeFalse();
    });

});

describe('string', function() {

    it(`primitive`, () => {
        expect(Number('str')).toBeFalse();
    });

    it(`object`, () => {
        expect(Number(new String('str'))).toBeFalse();
    });

});

describe('object', function() {

    it(`plain`, () => {
        expect(Number({})).toBeFalse();
    });

    it(`instance`, () => {
        expect(Number(new Map())).toBeFalse();
    });

});

describe('function', function() {

    it(`anonymous `, () => {
        expect(Number(function () {})).toBeFalse();
    });

    it(`anonymous arrow`, () => {
        expect(Number(()=>{})).toBeFalse();
    });

    it(`named`, () => {
        expect(Number(isNaN)).toBeFalse();
    });

});

describe('empty', function() {

    it(`null `, () => {
        expect(Number(null)).toBeFalse();
    });

    it(`undefined`, () => {
        expect(Number(undefined)).toBeFalse();
    });

});



