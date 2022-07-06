import {NumberParameters} from '../../../dist/assert/string/number.js';

it('enable console log', () => {spyOn(console, 'log').and.callThrough();});


it(`valid`, () => {
    expect(NumberParameters({}, true)).toBe('type is number.');
});

it(`invalid`, () => {
    expect(NumberParameters(1, false)).toBe('type must number, actual number.');
});
