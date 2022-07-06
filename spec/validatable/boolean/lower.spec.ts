import {LowerParameter} from '../../../dist/boolean/lower.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

describe(`inclusive`,function() {

    it(`lower with limit`, () => {
        expect(LowerParameter({value:0, maximum:1, inclusive: false})).toBeTrue();
        expect(LowerParameter({value:0, maximum:10, inclusive: false})).toBeTrue();
    });

    it(`equal with limit`, () => {
        expect(LowerParameter({value:0, maximum:0, inclusive:true})).toBeTrue();
        expect(LowerParameter({value:10, maximum:10, inclusive:true})).toBeTrue();
    });

    it(`greater than limit`, () => {
        expect(LowerParameter({value:1, maximum:0, inclusive:true})).toBeFalse();
        expect(LowerParameter({value:15, maximum:10, inclusive:true})).toBeFalse();
    });
});

describe(`exclusive`,function() {

    it(`lower with limit`, () => {
        expect(LowerParameter({value:0, maximum:1, inclusive: false})).toBeTrue();
        expect(LowerParameter({value:0, maximum:10, inclusive: false})).toBeTrue();
    });

    it(`equal with limit`, () => {
        expect(LowerParameter({value:1, maximum:1, inclusive:false})).toBeFalse();
        expect(LowerParameter({value:10, maximum:10, inclusive:false})).toBeFalse();
    });

    it(`greater than limit`, () => {
        expect(LowerParameter({value:1, maximum:0, inclusive:false})).toBeFalse();
        expect(LowerParameter({value:15, maximum:10, inclusive:false})).toBeFalse();
    });
});




