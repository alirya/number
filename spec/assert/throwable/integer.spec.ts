import Integer from "../../../dist/assert/throwable/integer-parameters";
import Message from "../../../dist/assert/string/integer-parameters";

it("enable console log", () => {spyOn(console, 'log').and.callThrough()});

it(`check value`, () => {
    let throwable = Integer(Infinity);
    expect(throwable.message).toBe(Message(Infinity, false));
    expect(throwable).toBeInstanceOf(Error);
});
