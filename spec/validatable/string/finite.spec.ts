import {FiniteParameters} from '../../../dist/assert/string/finite';

it('enable console log', () => {spyOn(console, 'log').and.callThrough();});
it(`valid`, () => {
    expect(FiniteParameters({valid:true, value:Infinity})).toBe('value is finite number.');
});

it(`invalid`, () => {
    expect(FiniteParameters({valid:false, value:1})).toBe('value must finite number, actual "1".');
});

