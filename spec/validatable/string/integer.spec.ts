import {IntegerParameter} from '../../../dist/assert/string/integer';

it('enable console log', () => {spyOn(console, 'log').and.callThrough();});

it(`valid`, () => {
    expect(IntegerParameter({valid:true, value:Infinity})).toBe('value is integer number.');
});

it(`invalid`, () => {
    expect(IntegerParameter({valid:false, value:1})).toBe('value must integer number, actual "1".');
});

