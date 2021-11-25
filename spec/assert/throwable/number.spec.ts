import Number from "../../../dist/assert/throwable/number-parameters";
import Message from "../../../dist/assert/string/number-parameters";

it("enable console log", () => {spyOn(console, 'log').and.callThrough()});

it(`check value`, () => {
    let throwable = Number(Infinity);
    expect(throwable.message).toBe(Message(Infinity, true));
    expect(throwable).toBeInstanceOf(Error);
});
