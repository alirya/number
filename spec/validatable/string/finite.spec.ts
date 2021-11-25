import Finite from "../../../dist/assert/string/finite-parameter";

it("enable console log", () => {spyOn(console, 'log').and.callThrough()});
it(`valid`, () => {
    expect(Finite({valid:true, value:Infinity})).toBe('value is finite number.');
});

it(`invalid`, () => {
    expect(Finite({valid:false, value:1})).toBe('value must finite number, actual "1".');
});

