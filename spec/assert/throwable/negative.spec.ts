import {NegativeParameters} from '../../../dist/assert/throwable/negative.js';
import Message from '../../../dist/assert/string/negative.js';

it('enable console log', () => {spyOn(console, 'log').and.callThrough();});

it(`check value`, () => {
    const throwable = NegativeParameters(Infinity);
    expect(throwable.message).toBe(Message.Parameters(Infinity, false));
    expect(throwable).toBeInstanceOf(Error);
});
