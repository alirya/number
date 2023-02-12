import {LowerParameters} from '../../dist/validatable/lower.js';
import LowerString from '../../dist/assert/string/lower.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

describe(`compiler compatible`,function() {

    const greater = new LowerParameters<number, string>(2, 1, false, LowerString.Parameters);

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


describe(`value equal to minimum`,function() {

    describe(`inclusive`,function() {

        const greater = new LowerParameters<number, string>(1, 1, true, LowerString.Parameters);

        it('validate object', ()=>{

            expect(greater.valid).toBeTrue();
            expect(greater.value).toBe(1);
            expect(greater.maximum).toBe(1);
            expect(greater.inclusive).toBeTrue();

        });
    });

    describe(`exclusive`,function() {

        const greater = new LowerParameters<number, string>(1, 1, false, LowerString.Parameters);

        it('validate object', ()=>{

            expect(greater.valid).toBeFalse();
            expect(greater.value).toBe(1);
            expect(greater.maximum).toBe(1);
            expect(greater.inclusive).toBeFalse();

        });
    });
});

describe(`value greater to minimum`,function() {

    describe(`inclusive`,function() {

        const greater = new LowerParameters<number, string>(2, 1, true, LowerString.Parameters);

        it('validate object', ()=>{

            expect(greater.valid).toBeFalse();
            expect(greater.value).toBe(2);
            expect(greater.maximum).toBe(1);
            expect(greater.inclusive).toBeTrue();

        });
    });

    describe(`exclusive`,function() {

        const greater = new LowerParameters<number, string>(2, 1, false, LowerString.Parameters);

        it('validate object', ()=>{

            expect(greater.valid).toBeFalse();
            expect(greater.value).toBe(2);
            expect(greater.maximum).toBe(1);
            expect(greater.inclusive).toBeFalse();

        });
    });
});

describe(`value lower to minimum`,function() {

    describe(`inclusive`,function() {

        const greater = new LowerParameters<number, string>(-1, 1, true, LowerString.Parameters);

        it('validate object', ()=>{

            expect(greater.valid).toBeTrue();
            expect(greater.value).toBe(-1);
            expect(greater.maximum).toBe(1);
            expect(greater.inclusive).toBeTrue();

        });
    });

    describe(`exclusive`,function() {

        const greater = new LowerParameters<number, string>(-1, 1, false, LowerString.Parameters);

        it('validate object', ()=>{

            expect(greater.valid).toBeTrue();
            expect(greater.value).toBe(-1);
            expect(greater.maximum).toBe(1);
            expect(greater.inclusive).toBeFalse();

        });
    });
});
