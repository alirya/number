import {LowerParameter} from '../../../dist/assert/string/lower';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

describe(`exclusive`,function() {

    it(`valid`, () => {
        expect(LowerParameter({valid:true, value: 1,maximum: 10, inclusive:false})).toBe('value is lower than "10".');
    });

    it(`invalid`, () => {
        expect(LowerParameter({valid:false, value: -1, maximum:-10, inclusive:false})).toBe('value must lower than "-10", actual "-1".');
    });

});

describe(`inclusive`,function() {

    it(`valid`, () => {
        expect(LowerParameter({valid:true, value: 1,maximum: 1, inclusive:true})).toBe('value is lower or equal than "1".');
    });

    it(`invalid`, () => {
        expect(LowerParameter({valid:false, value: -1, maximum:-1, inclusive:true})).toBe('value must lower or equal than "-1", actual "-1".');
    });

});

