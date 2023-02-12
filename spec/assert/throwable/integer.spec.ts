import {IntegerParameters} from '../../../dist/assert/throwable/integer.js';
import Message from '../../../dist/assert/string/integer.js';

it('enable console log', () => {spyOn(console, 'log').and.callThrough();});

it(`check value`, () => {
    const throwable = IntegerParameters(Infinity);
    expect(throwable.message).toBe(Message.Parameters(Infinity, false));
    expect(throwable).toBeInstanceOf(Error);
});
