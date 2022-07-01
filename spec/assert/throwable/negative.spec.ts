import {NegativeParameters} from '../../../dist/assert/throwable/negative';
import Message from '../../../dist/assert/string/negative';

it('enable console log', () => {spyOn(console, 'log').and.callThrough();});

it(`check value`, () => {
    let throwable = NegativeParameters(Infinity);
    expect(throwable.message).toBe(Message.Parameters(Infinity, false));
    expect(throwable).toBeInstanceOf(Error);
});
