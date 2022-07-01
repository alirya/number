import {FiniteParameters} from '../../../dist/assert/throwable/finite';
import Message from '../../../dist/assert/string/finite';

it('enable console log', () => {spyOn(console, 'log').and.callThrough();});

it(`check value`, () => {

    let throwable = FiniteParameters(Infinity);
    expect(throwable.message).toBe(Message.Parameters(Infinity, false));
    expect(throwable).toBeInstanceOf(Error);
});
