import Infinite from "../../../dist/assert/string/infinite-parameters";

it("enable console log", () => {spyOn(console, 'log').and.callThrough()});

it(`valid`, () => {
    expect(Infinite(Infinity, true)).toBe('value is infinite number.');
});

it(`invalid`, () => {
    expect(Infinite(1, false)).toBe('value must infinite number, actual "1".');
});

