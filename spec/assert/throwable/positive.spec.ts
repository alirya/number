import {PositiveParameters} from '../../../dist/assert/throwable/positive.js';
import Message from '../../../dist/assert/string/positive.js';

it('enable console log', () => {spyOn(console, 'log').and.callThrough();});

it(`check value`, () => {
    const throwable = PositiveParameters(Infinity);
    expect(throwable.message).toBe(Message.Parameters(Infinity, false));
    expect(throwable).toBeInstanceOf(Error);
});
