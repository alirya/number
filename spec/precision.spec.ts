import {RandomFloatParameters} from '../dist/random-float.js';
import Precision from '../dist/precision.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

describe(`precision`,function() {

    for(let i = 0; i <= 100; i++) {

        for(let precision = 0; precision <= 100; precision++) {

            const min = Math.floor(i / 2);
            const random = Precision.Parameters(RandomFloatParameters(min, i), 2);

            it(`precision ${i} for 2 (${random})`,() => {
                const length = random.toString().length;
                const maximum = i.toString().length + 3;
                const minimum = min.toString().length;

                expect(length).toBeGreaterThanOrEqual(minimum);
                expect(length).toBeLessThanOrEqual(maximum);
            });
        }
    }
});
