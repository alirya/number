import Nan from '../../../dist/assert/string/nan-parameter';

it('enable console log', () => {spyOn(console, 'log').and.callThrough();});


it(`positive`, () => {
    expect(Nan({value:Infinity, valid:true})).toBe('value is NaN.');
});

it(`negative`, () => {
    expect(Nan({value:-Infinity, valid:false})).toBe('value must NaN, actual "-Infinity".');
});
