import Lower from '../../dist/boolean/lower-parameters';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

describe(`inclusive`,function() {

    it(`lower with limit`, () => {
        expect(Lower(0, 1, false)).toBeTrue();
        expect(Lower(0, 10, false)).toBeTrue();
    });

    it(`equal with limit`, () => {
        expect(Lower(0, 0,true)).toBeTrue();
        expect(Lower(10, 10,true)).toBeTrue();
    });

    it(`greater than limit`, () => {
        expect(Lower(1, 0,true)).toBeFalse();
        expect(Lower(15, 10,true)).toBeFalse();
    });
});

describe(`exclusive`,function() {

    it(`lower with limit`, () => {
        expect(Lower(0, 1, false)).toBeTrue();
        expect(Lower(0, 10, false)).toBeTrue();
    });

    it(`equal with limit`, () => {
        expect(Lower(1, 1,false)).toBeFalse();
        expect(Lower(10, 10,false)).toBeFalse();
    });

    it(`greater than limit`, () => {
        expect(Lower(1, 0,false)).toBeFalse();
        expect(Lower(15, 10,false)).toBeFalse();
    });
});




