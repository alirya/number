import {NanParameters} from '../../../dist/assert/throwable/nan';
import Message from '../../../dist/assert/string/nan';

it('enable console log', () => {spyOn(console, 'log').and.callThrough();});

it(`check value`, () => {
    let throwable = NanParameters(Infinity);
    expect(throwable.message).toBe(Message.Parameters(Infinity, false));
    expect(throwable).toBeInstanceOf(Error);
});

