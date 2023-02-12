import {InfiniteParameters} from '../../../dist/assert/throwable/infinite.js';
import Message from '../../../dist/assert/string/infinite.js';

it('enable console log', () => {spyOn(console, 'log').and.callThrough();});

it(`check value`, () => {
    const throwable = InfiniteParameters(Infinity);
    expect(throwable.message).toBe(Message.Parameters(Infinity, false));
    expect(throwable).toBeInstanceOf(Error);
});

