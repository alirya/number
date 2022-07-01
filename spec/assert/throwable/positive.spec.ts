import {PositiveParameters} from '../../../dist/assert/throwable/positive';
import Message from '../../../dist/assert/string/positive';

it('enable console log', () => {spyOn(console, 'log').and.callThrough();});

it(`check value`, () => {
    let throwable = PositiveParameters(Infinity);
    expect(throwable.message).toBe(Message.Parameters(Infinity, false));
    expect(throwable).toBeInstanceOf(Error);
});
