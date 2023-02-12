import {NegativeParameters} from '../../dist/validatable/negative.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

describe(`compiler compatible`,function() {

    const greater = NegativeParameters(2);

    it('set valid', ()=>{

        try {
            // @ts-expect-error
            greater.valid = true;

        } catch (e) {

            expect(e).toBeInstanceOf(Error);
        }

    });

    it('set value', ()=>{

        try {
            // @ts-expect-error
            greater.value = 3;

        } catch (e) {

            expect(e).toBeInstanceOf(Error);
        }

    });

    it('set minimum', ()=>{

        try {
            // @ts-expect-error
            greater.maximum = 3;

        } catch (e) {

            expect(e).toBeInstanceOf(Error);
        }

    });

    it('set inclusive', ()=>{

        try {
            // @ts-expect-error
            greater.inclusive = true;

        } catch (e) {

            expect(e).toBeInstanceOf(Error);
        }

    });

});


describe(`integer`,function() {

    describe(`negative`,function() {

        const greater = NegativeParameters(-1);

        it('validate object', ()=>{

            expect(greater.valid).toBeTrue();
            expect(greater.value).toBe(-1);
        });
    });

    describe(`positive`,function() {

        const greater = NegativeParameters(1);

        it('validate object', ()=>{

            expect(greater.valid).toBeFalse();
            expect(greater.value).toBe(1);
        });
    });
});

describe(`float`,function() {

    describe(`negative`,function() {

        const greater = NegativeParameters(-1.1);

        it('validate object', ()=>{

            expect(greater.valid).toBeTrue();
            expect(greater.value).toBe(-1.1);
        });
    });

    describe(`positive`,function() {

        const greater = NegativeParameters(1.1);

        it('validate object', ()=>{

            expect(greater.valid).toBeFalse();
            expect(greater.value).toBe(1.1);
        });
    });
});

describe(`infinity`,function() {

    describe(`negative`,function() {

        const greater = NegativeParameters(-Infinity);

        it('validate object', ()=>{

            expect(greater.valid).toBeTrue();
            expect(greater.value).toBe(-Infinity);
        });
    });

    describe(`positive`,function() {

        const greater = NegativeParameters(Infinity);

        it('validate object', ()=>{

            expect(greater.valid).toBeFalse();
            expect(greater.value).toBe(Infinity);
        });
    });
});
