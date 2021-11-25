import Nan from "../../../dist/assert/throwable/nan-parameters";
import Message from "../../../dist/assert/string/nan-parameters";

it("enable console log", () => {spyOn(console, 'log').and.callThrough()});

it(`check value`, () => {
    let throwable = Nan(Infinity);
    expect(throwable.message).toBe(Message(Infinity, false));
    expect(throwable).toBeInstanceOf(Error);
});

