import Number from "../../../dist/assert/string/number-parameter";

it("enable console log", () => {spyOn(console, 'log').and.callThrough()});

it(`positive`, () => {
    expect(Number({value:Infinity, valid:false})).toBe('type must number, actual number.');
});

it(`number`, () => {
    expect(Number({value:-Infinity, valid:true})).toBe('type is number.');
});
