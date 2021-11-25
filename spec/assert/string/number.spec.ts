import Number from "../../../dist/assert/string/number-parameters";

it("enable console log", () => {spyOn(console, 'log').and.callThrough()});


it(`valid`, () => {
    expect(Number({}, true)).toBe('type is number.');
});

it(`invalid`, () => {
    expect(Number(1, false)).toBe('type must number, actual number.');
});
