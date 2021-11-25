import GreaterFromObject from "../../../dist/boolean/greater-parameter";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

describe(`inclusive`,function() {

    it(`lower with limit`, () => {
        expect(GreaterFromObject({value:0, minimum:1, inclusive:false})).toBeFalse();
        expect(GreaterFromObject({value:0, minimum:10, inclusive:false})).toBeFalse();
    });

    it(`equal with limit`, () => {
        expect(GreaterFromObject({value:0, minimum:0, inclusive:true})).toBeTrue();
        expect(GreaterFromObject({value:10, minimum:10, inclusive:true})).toBeTrue();
    });

    it(`greater than limit`, () => {
        expect(GreaterFromObject({value:1, minimum:0, inclusive:true})).toBeTrue();
        expect(GreaterFromObject({value:15, minimum:10, inclusive:true})).toBeTrue();
    });
});

describe(`exclusive`,function() {

    it(`lower with limit`, () => {
        expect(GreaterFromObject({value:0, minimum:1, inclusive: false})).toBeFalse();
        expect(GreaterFromObject({value:0, minimum:10, inclusive: false})).toBeFalse();
    });

    it(`equal with limit`, () => {
        expect(GreaterFromObject({value:1, minimum:1, inclusive:false})).toBeFalse();
        expect(GreaterFromObject({value:10, minimum:10, inclusive:false})).toBeFalse();
    });

    it(`greater than limit`, () => {
        expect(GreaterFromObject({value:1, minimum:0, inclusive:false})).toBeTrue();
        expect(GreaterFromObject({value:15, minimum:10, inclusive:false})).toBeTrue();
    });
});




