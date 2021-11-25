import Finite from "../../../dist/assert/string/finite-parameters";

it("enable console log", () => {spyOn(console, 'log').and.callThrough()});


it(`valid`, () => {
    expect(Finite(Infinity, true)).toBe('value is finite number.');
});

it(`invalid`, () => {
    expect(Finite(1, false)).toBe('value must finite number, actual "1".');
});
