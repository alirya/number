import Greater from '../../../dist/assert/throwable/greater-parameters';
import Message from '../../../dist/assert/string/greater-parameters';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it(`exclusive`, () => {
    let throwable = Greater(1, 10, false);
    expect(throwable.message).toBe(Message( 1, false,10, false));
    expect(throwable).toBeInstanceOf(Error);
});

it(`inclusive`, () => {
    let throwable = Greater(1, 10, true);
    expect(throwable.message).toBe(Message( 1, false,10, true));
    expect(throwable).toBeInstanceOf(Error);
});
