import {NumberParameter} from '../../../dist/assert/string/number';

it('enable console log', () => {spyOn(console, 'log').and.callThrough();});

it(`positive`, () => {
    expect(NumberParameter({value:Infinity, valid:false})).toBe('type must number, actual number.');
});

it(`number`, () => {
    expect(NumberParameter({value:-Infinity, valid:true})).toBe('type is number.');
});
