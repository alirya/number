import {LowerParameters} from '../../../dist/assert/string/lower.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

describe(`exclusive`,function() {

    it(`valid`, () => {
        expect(LowerParameters( 1, true,10, false)).toBe('value is lower than "10".');
    });

    it(`invalid`, () => {
        expect(LowerParameters( -1, false, -10, false)).toBe('value must lower than "-10", actual "-1".');
    });

});

describe(`inclusive`,function() {

    it(`valid`, () => {
        expect(LowerParameters( 1, true,1, true)).toBe('value is lower or equal than "1".');
    });

    it(`invalid`, () => {
        expect(LowerParameters( -1, false, -1, true)).toBe('value must lower or equal than "-1", actual "-1".');
    });

});

