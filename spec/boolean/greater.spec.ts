import {GreaterParameters} from '../../dist/boolean/greater.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

describe(`inclusive`,function() {

    it(`lower with limit`, () => {
        expect(GreaterParameters(0, 1, false)).toBeFalse();
        expect(GreaterParameters(0, 10, false)).toBeFalse();
    });

    it(`equal with limit`, () => {
        expect(GreaterParameters(0, 0,true)).toBeTrue();
        expect(GreaterParameters(10, 10,true)).toBeTrue();
    });

    it(`greater than limit`, () => {
        expect(GreaterParameters(1, 0,true)).toBeTrue();
        expect(GreaterParameters(15, 10,true)).toBeTrue();
    });
});

describe(`exclusive`,function() {

    it(`lower with limit`, () => {
        expect(GreaterParameters(0, 1, false)).toBeFalse();
        expect(GreaterParameters(0, 10, false)).toBeFalse();
    });

    it(`equal with limit`, () => {
        expect(GreaterParameters(1, 1,false)).toBeFalse();
        expect(GreaterParameters(10, 10,false)).toBeFalse();
    });

    it(`greater than limit`, () => {
        expect(GreaterParameters(1, 0,false)).toBeTrue();
        expect(GreaterParameters(15, 10,false)).toBeTrue();
    });
});




