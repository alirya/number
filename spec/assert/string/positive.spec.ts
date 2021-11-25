import Positive from "../../../dist/assert/string/positive-parameters";

it("enable console log", () => {spyOn(console, 'log').and.callThrough()});

it(`valid`, () => {
    expect(Positive(Infinity, true)).toBe('value is positive number.');
});

it(`invalid`, () => {
    expect(Positive(1, false)).toBe('value must positive number, actual "1".');
});
