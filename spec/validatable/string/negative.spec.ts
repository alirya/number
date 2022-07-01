import {NegativeParameter} from '../../../dist/assert/string/negative';

it('enable console log', () => {spyOn(console, 'log').and.callThrough();});

it(`positive`, () => {
    expect(NegativeParameter({value:Infinity, valid:true})).toBe('value is negative number.');
});

it(`negative`, () => {
    expect(NegativeParameter({value:-Infinity, valid:false})).toBe('value must negative number, actual "-Infinity".');
});
