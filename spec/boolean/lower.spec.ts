import {LowerParameters} from '../../dist/boolean/lower.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

describe(`inclusive`,function() {

    it(`lower with limit`, () => {
        expect(LowerParameters(0, 1, false)).toBeTrue();
        expect(LowerParameters(0, 10, false)).toBeTrue();
    });

    it(`equal with limit`, () => {
        expect(LowerParameters(0, 0,true)).toBeTrue();
        expect(LowerParameters(10, 10,true)).toBeTrue();
    });

    it(`greater than limit`, () => {
        expect(LowerParameters(1, 0,true)).toBeFalse();
        expect(LowerParameters(15, 10,true)).toBeFalse();
    });
});

describe(`exclusive`,function() {

    it(`lower with limit`, () => {
        expect(LowerParameters(0, 1, false)).toBeTrue();
        expect(LowerParameters(0, 10, false)).toBeTrue();
    });

    it(`equal with limit`, () => {
        expect(LowerParameters(1, 1,false)).toBeFalse();
        expect(LowerParameters(10, 10,false)).toBeFalse();
    });

    it(`greater than limit`, () => {
        expect(LowerParameters(1, 0,false)).toBeFalse();
        expect(LowerParameters(15, 10,false)).toBeFalse();
    });
});




