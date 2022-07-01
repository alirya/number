import {NanParameters} from '../../../dist/assert/string/nan';

it('enable console log', () => {spyOn(console, 'log').and.callThrough();});


it(`valid`, () => {
    expect(NanParameters(Infinity, true)).toBe('value is NaN.');
});

it(`invalid`, () => {
    expect(NanParameters(1, false)).toBe('value must NaN, actual "1".');
});

