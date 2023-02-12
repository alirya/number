import Sum from '../dist/sum.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it(`2 or more`,() => {

    expect(Sum(1,1)).toEqual(2);
    expect(Sum(1,1,1)).toEqual(3);
});

it(`1`,() => {

    expect(Sum(1)).toEqual(1);

});

it(`0`,() => {

    expect(Sum()).toEqual(0);
    expect(Sum(...[])).toEqual(0);

});
