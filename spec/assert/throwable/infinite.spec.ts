import Infinite from '../../../dist/assert/throwable/infinite-parameters';
import Message from '../../../dist/assert/string/infinite-parameters';

it('enable console log', () => {spyOn(console, 'log').and.callThrough();});

it(`check value`, () => {
    let throwable = Infinite(Infinity);
    expect(throwable.message).toBe(Message(Infinity, false));
    expect(throwable).toBeInstanceOf(Error);
});

