import {IntegerParameters} from '../../../dist/assert/throwable/integer';
import Message from '../../../dist/assert/string/integer';

it('enable console log', () => {spyOn(console, 'log').and.callThrough();});

it(`check value`, () => {
    let throwable = IntegerParameters(Infinity);
    expect(throwable.message).toBe(Message.Parameters(Infinity, false));
    expect(throwable).toBeInstanceOf(Error);
});
