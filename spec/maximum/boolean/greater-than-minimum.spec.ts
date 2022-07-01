import {GreaterThanMinimumParameter} from '../../../dist/maximum/boolean/greater-than-minimum';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

describe(`inclusive`,function() {

    it(`lower with limit`, () => {
        expect(GreaterThanMinimumParameter({maximum:0, minimum:1, inclusive:false})).toBeFalse();
        expect(GreaterThanMinimumParameter({maximum:0, minimum:10, inclusive:false})).toBeFalse();
    });

    it(`equal with limit`, () => {
        expect(GreaterThanMinimumParameter({maximum:0, minimum:0, inclusive:true})).toBeTrue();
        expect(GreaterThanMinimumParameter({maximum:10, minimum:10, inclusive:true})).toBeTrue();
    });

    it(`greater than limit`, () => {
        expect(GreaterThanMinimumParameter({maximum:1, minimum:0, inclusive:true})).toBeTrue();
        expect(GreaterThanMinimumParameter({maximum:15, minimum:10, inclusive:true})).toBeTrue();
    });
});

describe(`exclusive`,function() {

    it(`lower with limit`, () => {
        expect(GreaterThanMinimumParameter({maximum:0, minimum:1, inclusive: false})).toBeFalse();
        expect(GreaterThanMinimumParameter({maximum:0, minimum:10, inclusive: false})).toBeFalse();
    });

    it(`equal with limit`, () => {
        expect(GreaterThanMinimumParameter({maximum:1, minimum:1, inclusive:false})).toBeFalse();
        expect(GreaterThanMinimumParameter({maximum:10, minimum:10, inclusive:false})).toBeFalse();
    });

    it(`greater than limit`, () => {
        expect(GreaterThanMinimumParameter({maximum:1, minimum:0, inclusive:false})).toBeTrue();
        expect(GreaterThanMinimumParameter({maximum:15, minimum:10, inclusive:false})).toBeTrue();
    });
});




