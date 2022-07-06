import {NumberParameters} from '../../../dist/assert/throwable/number.js';
import Message from '../../../dist/assert/string/number.js';

it('enable console log', () => {spyOn(console, 'log').and.callThrough();});

it(`check value`, () => {
    let throwable = NumberParameters(Infinity);
    expect(throwable.message).toBe(Message.Parameters(Infinity, true));
    expect(throwable).toBeInstanceOf(Error);
});
