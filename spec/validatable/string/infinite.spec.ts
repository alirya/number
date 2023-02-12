import {InfiniteParameter} from '../../../dist/assert/string/infinite.js';

it('enable console log', () => {spyOn(console, 'log').and.callThrough();});

it(`valid`, () => {
    expect(InfiniteParameter({valid:true, value:Infinity})).toBe('value is infinite number.');
});

it(`invalid`, () => {
    expect(InfiniteParameter({valid:false, value:1})).toBe('value must infinite number, actual "1".');
});
