import Positive from "../../../dist/assert/throwable/positive-parameters";
import Message from "../../../dist/assert/string/positive-parameters";

it("enable console log", () => {spyOn(console, 'log').and.callThrough()});

it(`check value`, () => {
    let throwable = Positive(Infinity);
    expect(throwable.message).toBe(Message(Infinity, false));
    expect(throwable).toBeInstanceOf(Error);
});
