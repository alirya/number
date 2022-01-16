import LowerObject from '../../../dist/boolean/lower-parameter';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

describe(`inclusive`,function() {

    it(`lower with limit`, () => {
        expect(LowerObject({value:0, maximum:1, inclusive: false})).toBeTrue();
        expect(LowerObject({value:0, maximum:10, inclusive: false})).toBeTrue();
    });

    it(`equal with limit`, () => {
        expect(LowerObject({value:0, maximum:0, inclusive:true})).toBeTrue();
        expect(LowerObject({value:10, maximum:10, inclusive:true})).toBeTrue();
    });

    it(`greater than limit`, () => {
        expect(LowerObject({value:1, maximum:0, inclusive:true})).toBeFalse();
        expect(LowerObject({value:15, maximum:10, inclusive:true})).toBeFalse();
    });
});

describe(`exclusive`,function() {

    it(`lower with limit`, () => {
        expect(LowerObject({value:0, maximum:1, inclusive: false})).toBeTrue();
        expect(LowerObject({value:0, maximum:10, inclusive: false})).toBeTrue();
    });

    it(`equal with limit`, () => {
        expect(LowerObject({value:1, maximum:1, inclusive:false})).toBeFalse();
        expect(LowerObject({value:10, maximum:10, inclusive:false})).toBeFalse();
    });

    it(`greater than limit`, () => {
        expect(LowerObject({value:1, maximum:0, inclusive:false})).toBeFalse();
        expect(LowerObject({value:15, maximum:10, inclusive:false})).toBeFalse();
    });
});




