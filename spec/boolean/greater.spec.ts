import Greater from '../../dist/boolean/greater-parameters';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

describe(`inclusive`,function() {

    it(`lower with limit`, () => {
        expect(Greater(0, 1, false)).toBeFalse();
        expect(Greater(0, 10, false)).toBeFalse();
    });

    it(`equal with limit`, () => {
        expect(Greater(0, 0,true)).toBeTrue();
        expect(Greater(10, 10,true)).toBeTrue();
    });

    it(`greater than limit`, () => {
        expect(Greater(1, 0,true)).toBeTrue();
        expect(Greater(15, 10,true)).toBeTrue();
    });
});

describe(`exclusive`,function() {

    it(`lower with limit`, () => {
        expect(Greater(0, 1, false)).toBeFalse();
        expect(Greater(0, 10, false)).toBeFalse();
    });

    it(`equal with limit`, () => {
        expect(Greater(1, 1,false)).toBeFalse();
        expect(Greater(10, 10,false)).toBeFalse();
    });

    it(`greater than limit`, () => {
        expect(Greater(1, 0,false)).toBeTrue();
        expect(Greater(15, 10,false)).toBeTrue();
    });
});




