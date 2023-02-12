import {GreaterParameters} from '../../../dist/assert/string/greater.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

describe(`exclusive`,function() {

    it(`valid`, () => {
        expect(GreaterParameters( 1, true,10, false)).toBe('value is greater than "10".');
    });

    it(`invalid`, () => {
        expect(GreaterParameters( -1, false,-10, false)).toBe('value must greater than "-10", actual "-1".');
    });

});

describe(`inclusive`,function() {

    it(`valid`, () => {
        expect(GreaterParameters(1, true, 1, true)).toBe('value is greater or equal than "1".');
    });

    it(`invalid`, () => {
        expect(GreaterParameters( -1, false,-1, true)).toBe('value must greater or equal than "-1", actual "-1".');
    });

});
