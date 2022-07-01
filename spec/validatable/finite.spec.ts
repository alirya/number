import {FiniteParameters} from '../../dist/validatable/finite';
import FiniteString from '../../dist/assert/string/finite';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

describe(`compiler compatible`,function() {

    let greater = FiniteParameters<string>(2,  FiniteString.Parameters);

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

    describe(``,function() {

        let greater = FiniteParameters<string>(1,  FiniteString.Parameters);

        it('validate object', ()=>{

            expect(greater.valid).toBeTrue();
            expect(greater.value).toBe(1);
        });
    });

    describe(`positive`,function() {

        let greater = FiniteParameters<string>(-1,  FiniteString.Parameters);

        it('validate object', ()=>{

            expect(greater.valid).toBeTrue();
            expect(greater.value).toBe(-1);
        });
    });
});

describe(`float`,function() {

    describe(`positive`,function() {

        let greater = FiniteParameters<string>(1.1,  FiniteString.Parameters);

        it('validate object', ()=>{

            expect(greater.valid).toBeTrue();
            expect(greater.value).toBe(1.1);
        });
    });

    describe(`positive`,function() {

        let greater = FiniteParameters<string>(-1.1,  FiniteString.Parameters);

        it('validate object', ()=>{

            expect(greater.valid).toBeTrue();
            expect(greater.value).toBe(-1.1);
        });
    });
});

describe(`infinity`,function() {

    describe(`positive`,function() {

        let greater = FiniteParameters<string>(Infinity,  FiniteString.Parameters);

        it('validate object', ()=>{

            expect(greater.valid).toBeFalse();
            expect(greater.value).toBe(Infinity);
        });
    });

    describe(`positive`,function() {

        let greater = FiniteParameters<string>(-Infinity,  FiniteString.Parameters);

        it('validate object', ()=>{

            expect(greater.valid).toBeFalse();
            expect(greater.value).toBe(-Infinity);
        });
    });
});
