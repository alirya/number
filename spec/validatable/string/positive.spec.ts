import {PositiveParameter} from '../../../dist/assert/string/positive.js';

it('enable console log', () => {spyOn(console, 'log').and.callThrough();});

it(`float`, () => {
    expect(PositiveParameter({value:NaN, valid:true})).toBe('value is positive number.');
});

it(`float`, () => {
    expect(PositiveParameter({value:NaN, valid:false})).toBe('value must positive number, actual "NaN".');
});
