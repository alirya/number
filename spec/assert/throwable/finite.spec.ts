import Finite from '../../../dist/assert/throwable/finite-parameters';
import Message from '../../../dist/assert/string/finite-parameters';

it('enable console log', () => {spyOn(console, 'log').and.callThrough();});

it(`check value`, () => {

    let throwable = Finite(Infinity);
    expect(throwable.message).toBe(Message(Infinity, false));
    expect(throwable).toBeInstanceOf(Error);
});
