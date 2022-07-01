import {NanParameter} from '../../../dist/assert/string/nan';

it('enable console log', () => {spyOn(console, 'log').and.callThrough();});


it(`positive`, () => {
    expect(NanParameter({value:Infinity, valid:true})).toBe('value is NaN.');
});

it(`negative`, () => {
    expect(NanParameter({value:-Infinity, valid:false})).toBe('value must NaN, actual "-Infinity".');
});
