import Negative from "../../../dist/assert/throwable/negative-parameters";
import Message from "../../../dist/assert/string/negative-parameters";

it("enable console log", () => {spyOn(console, 'log').and.callThrough()});

it(`check value`, () => {
    let throwable = Negative(Infinity);
    expect(throwable.message).toBe(Message(Infinity, false));
    expect(throwable).toBeInstanceOf(Error);
});
