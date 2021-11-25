import Infinite from "../../../dist/assert/string/infinite-parameter";

it("enable console log", () => {spyOn(console, 'log').and.callThrough()});

it(`valid`, () => {
    expect(Infinite({valid:true, value:Infinity})).toBe('value is infinite number.');
});

it(`invalid`, () => {
    expect(Infinite({valid:false, value:1})).toBe('value must infinite number, actual "1".');
});
