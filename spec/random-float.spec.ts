import {RandomFloatParameters} from '../dist/random-float.js';
import {RandomFloatParameter} from '../dist/random-float.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

describe(`iterative`,function() {

    const min = -50;
    const max = 50;

    for(let i = min; i <= max; i++) {

        describe(`inclusive`,function() {

            it(`result ${min - 1} - ${i}`, () => {

                {
                    const random = RandomFloatParameters(min - 1, i);
                    expect(random).toBeLessThanOrEqual(i);
                    expect(random).toBeGreaterThanOrEqual(min - 1);
                }
                {
                    const random = RandomFloatParameter({minimum:min - 1, maximum:i});
                    expect(random).toBeLessThanOrEqual(i);
                    expect(random).toBeGreaterThanOrEqual(min - 1);
                }

            });

            it(`result 50 - ${i+50}`, () => {

                {
                    const random = RandomFloatParameters(min, i + max);
                    expect(random).toBeLessThanOrEqual(i + max);
                    expect(random).toBeGreaterThanOrEqual(min);
                }
                {
                    const random = RandomFloatParameter({minimum:min, maximum:i + max, inclusive : true});
                    expect(random).toBeLessThanOrEqual(i + max);
                    expect(random).toBeGreaterThanOrEqual(min);
                }
            });
        });

        describe(`exclusive`,function() {

            const val1 = i + 1;

            it(`result ${min} - ${val1}`, () => {

                {
                    const random = RandomFloatParameters(min, val1, false);
                    expect(random).toBeLessThan(val1);
                    expect(random).toBeGreaterThan(min);
                }

                {
                    const random = RandomFloatParameter({minimum:min, maximum:val1, inclusive : false});
                    expect(random).toBeLessThan(val1);
                    expect(random).toBeGreaterThan(min);
                }

            });

            const val2 = i + 51;
            it(`result ${min} - ${val2}`, () => {

                {
                    const random = RandomFloatParameters(min, val2, false);
                    expect(random).toBeLessThan(val2);
                    expect(random).toBeGreaterThan(min);
                }
                {
                    const random = RandomFloatParameter({minimum:min, maximum:val2, inclusive : false});
                    expect(random).toBeLessThan(val2);
                    expect(random).toBeGreaterThan(min);
                }

            });
        });
    }
});


describe(`minimum & maximum equal`,function() {

    it(`inclusive`,function() {

        const random = RandomFloatParameters(1, 1, true);
        expect(random).toBe(1);

    });

    it(`inclusive object`,function() {

        const random = RandomFloatParameter({minimum:1, maximum:1, inclusive : true});
        expect(random).toBe(1);

    });

    it(`exclusive`,function() {

        try {
            RandomFloatParameters(1, 1, false);
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }

    });

    it(`exclusive object`,function() {

        try {
            RandomFloatParameter({minimum:1, maximum:1, inclusive : false});
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }

    });
});


describe(`minimum greater than maximum`,function() {

    it(`inclusive`,function() {
        try {
            RandomFloatParameters(1, 0, true);
            fail('exception should thrown');
        } catch (e) {

            expect(e).toBeInstanceOf(Error);
        }
    });

    it(`inclusive object`,function() {
        try {
            RandomFloatParameter({minimum:1, maximum:0, inclusive : true});
            fail('exception should thrown');
        } catch (e) {

            expect(e).toBeInstanceOf(Error);
        }
    });

    it(`exclusive`,function() {
        try {
            RandomFloatParameters(1, 0, false);
            fail('exception should thrown');
        } catch (e) {

            expect(e).toBeInstanceOf(Error);
        }
    });

    it(`exclusive object`,function() {
        try {
            RandomFloatParameter({minimum:1, maximum:0, inclusive : false});
            fail('exception should thrown');
        } catch (e) {

            expect(e).toBeInstanceOf(Error);
        }
    });

});
