import RandomInteger from "../dist/random-integer-parameters";
import RandomIntegerFromObject from "../dist/random-integer-parameter";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

describe(`iterative`,function() {

    const min = -50;
    const max = 50;

    for(let i = min; i <= max; i++) {

        describe(`inclusive`,function() {

            it(`result ${min - 1} - ${i}`, () => {
                {
                    let random = RandomInteger(min - 1, i);
                    expect(random).toBeLessThanOrEqual(i);
                    expect(random).toBeGreaterThanOrEqual(min - 1);
                }

                {
                    let random = RandomIntegerFromObject({minimum:min - 1, maximum:i, inclusive : true});
                    expect(random).toBeLessThanOrEqual(i);
                    expect(random).toBeGreaterThanOrEqual(min - 1);
                }

            });

            it(`result ${min + max} - ${i+max}`, () => {
                {
                    let random = RandomInteger(min + max, i+max);
                    expect(random).toBeLessThanOrEqual(i + max);
                    expect(random).toBeGreaterThanOrEqual(min + max);
                }

                {
                    let random = RandomIntegerFromObject({minimum:min+max, maximum: i + max});
                    expect(random).toBeLessThanOrEqual(i + max);
                    expect(random).toBeGreaterThanOrEqual(min + max);
                }
            });
        });

        describe(`exclusive`,function() {

            let val1 = i + 2;

            it(`result ${min} - ${val1}`, () => {
                {
                    let random = RandomInteger(min, val1, false);
                    expect(random).toBeLessThan(val1);
                    expect(random).toBeGreaterThan(min);
                }

                {
                    let random = RandomIntegerFromObject({minimum: min, maximum: val1, inclusive: false});
                    expect(random).toBeLessThan(val1);
                    expect(random).toBeGreaterThan(min);
                }
            });

            let val2 = i + 52;
            it(`result ${min} - ${val2}`, () => {
                {
                    let random = RandomInteger(min, val2, false);
                    expect(random).toBeLessThan(val2);
                    expect(random).toBeGreaterThan(min);
                }

                {
                    let random = RandomIntegerFromObject({minimum: min, maximum: val2, inclusive: false});
                    expect(random).toBeLessThan(val2);
                    expect(random).toBeGreaterThan(min);
                }
            });
        });
    }
});


describe(`minimum & maximum equal`,function() {

    it(`inclusive`,function() {

        {
            let random = RandomInteger(1, 1, true);
            expect(random).toBe(1);
        }
        {
            let random = RandomIntegerFromObject({minimum: 1, maximum: 1, inclusive: true});
            expect(random).toBe(1);
        }

    });

    it(`exclusive`,function() {

        try {
            RandomInteger(1, 1, false);
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }

        try {
            RandomIntegerFromObject({minimum: 1, maximum: 1, inclusive: false});
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }

    });
});


describe(`minimum greater than maximum`,function() {

    it(`inclusive`,function() {

        try {
            RandomInteger(1, 0, true);
            fail('exception should thrown');
        } catch (e) {

            expect(e).toBeInstanceOf(Error);
        }

        try {
            RandomIntegerFromObject({minimum: 1, maximum: 0, inclusive: true});
            fail('exception should thrown');
        } catch (e) {

            expect(e).toBeInstanceOf(Error);
        }

        try {
            RandomIntegerFromObject({minimum: 1, maximum: 0});
            fail('exception should thrown');
        } catch (e) {

            expect(e).toBeInstanceOf(Error);
        }
    });

    it(`exclusive`,function() {

        try {
            RandomInteger(1, 0, false);
            fail('exception should thrown');
        } catch (e) {

            expect(e).toBeInstanceOf(Error);
        }

        try {
            RandomIntegerFromObject({minimum: 1, maximum: 0, inclusive: false});
            fail('exception should thrown');
        } catch (e) {

            expect(e).toBeInstanceOf(Error);
        }
    });
});


