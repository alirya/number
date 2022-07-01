import {InfiniteParameters} from '../../../dist/assert/throwable/infinite';
import Message from '../../../dist/assert/string/infinite';

it('enable console log', () => {spyOn(console, 'log').and.callThrough();});

it(`check value`, () => {
    let throwable = InfiniteParameters(Infinity);
    expect(throwable.message).toBe(Message.Parameters(Infinity, false));
    expect(throwable).toBeInstanceOf(Error);
});

