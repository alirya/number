import {GreaterParameters} from '../../../dist/assert/throwable/greater.js';
import Message from '../../../dist/assert/string/greater.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it(`exclusive`, () => {
    const throwable = GreaterParameters(1, 10, false);
    expect(throwable.message).toBe(Message.Parameters( 1, false,10, false));
    expect(throwable).toBeInstanceOf(Error);
});

it(`inclusive`, () => {
    const throwable = GreaterParameters(1, 10, true);
    expect(throwable.message).toBe(Message.Parameters( 1, false,10, true));
    expect(throwable).toBeInstanceOf(Error);
});
