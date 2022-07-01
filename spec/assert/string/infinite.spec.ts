import {InfiniteParameters} from '../../../dist/assert/string/infinite';

it('enable console log', () => {spyOn(console, 'log').and.callThrough();});

it(`valid`, () => {
    expect(InfiniteParameters(Infinity, true)).toBe('value is infinite number.');
});

it(`invalid`, () => {
    expect(InfiniteParameters(1, false)).toBe('value must infinite number, actual "1".');
});

