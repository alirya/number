import RandomFloat from '../dist/random-float-parameters';
import Precision from '../dist/precision-parameters';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

describe(`precision`,function() {

    for(let i = 0; i <= 100; i++) {

        for(let precision = 0; precision <= 100; precision++) {

            let min = Math.floor(i / 2);
            let random = Precision(RandomFloat(min, i), 2);

            it(`precision ${i} for 2 (${random})`,() => {
                let length = random.toString().length;
                let maximum = i.toString().length + 3;
                let minimum = min.toString().length;

                expect(length).toBeGreaterThanOrEqual(minimum);
                expect(length).toBeLessThanOrEqual(maximum);
            });
        }
    }
});
