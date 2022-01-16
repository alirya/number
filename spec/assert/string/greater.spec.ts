import Greater from '../../../dist/assert/string/greater-parameters';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

describe(`exclusive`,function() {

    it(`valid`, () => {
        expect(Greater( 1, true,10, false)).toBe('value is greater than "10".');
    });

    it(`invalid`, () => {
        expect(Greater( -1, false,-10, false)).toBe('value must greater than "-10", actual "-1".');
    });

});

describe(`inclusive`,function() {

    it(`valid`, () => {
        expect(Greater(1, true, 1, true)).toBe('value is greater or equal than "1".');
    });

    it(`invalid`, () => {
        expect(Greater( -1, false,-1, true)).toBe('value must greater or equal than "-1", actual "-1".');
    });

});
