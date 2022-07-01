import {GreaterParameter} from '../../../dist/boolean/greater';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

describe(`inclusive`,function() {

    it(`lower with limit`, () => {
        expect(GreaterParameter({value:0, minimum:1, inclusive:false})).toBeFalse();
        expect(GreaterParameter({value:0, minimum:10, inclusive:false})).toBeFalse();
    });

    it(`equal with limit`, () => {
        expect(GreaterParameter({value:0, minimum:0, inclusive:true})).toBeTrue();
        expect(GreaterParameter({value:10, minimum:10, inclusive:true})).toBeTrue();
    });

    it(`greater than limit`, () => {
        expect(GreaterParameter({value:1, minimum:0, inclusive:true})).toBeTrue();
        expect(GreaterParameter({value:15, minimum:10, inclusive:true})).toBeTrue();
    });
});

describe(`exclusive`,function() {

    it(`lower with limit`, () => {
        expect(GreaterParameter({value:0, minimum:1, inclusive: false})).toBeFalse();
        expect(GreaterParameter({value:0, minimum:10, inclusive: false})).toBeFalse();
    });

    it(`equal with limit`, () => {
        expect(GreaterParameter({value:1, minimum:1, inclusive:false})).toBeFalse();
        expect(GreaterParameter({value:10, minimum:10, inclusive:false})).toBeFalse();
    });

    it(`greater than limit`, () => {
        expect(GreaterParameter({value:1, minimum:0, inclusive:false})).toBeTrue();
        expect(GreaterParameter({value:15, minimum:10, inclusive:false})).toBeTrue();
    });
});




