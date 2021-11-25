import Lower from "../../../dist/assert/string/lower-parameter";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

describe(`exclusive`,function() {

    it(`valid`, () => {
        expect(Lower({valid:true, value: 1,maximum: 10, inclusive:false})).toBe('value is lower than "10".');
    });

    it(`invalid`, () => {
        expect(Lower({valid:false, value: -1, maximum:-10, inclusive:false})).toBe('value must lower than "-10", actual "-1".');
    });

});

describe(`inclusive`,function() {

    it(`valid`, () => {
        expect(Lower({valid:true, value: 1,maximum: 1, inclusive:true})).toBe('value is lower or equal than "1".');
    });

    it(`invalid`, () => {
        expect(Lower({valid:false, value: -1, maximum:-1, inclusive:true})).toBe('value must lower or equal than "-1", actual "-1".');
    });

});

