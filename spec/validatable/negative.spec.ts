import Negative from '../../dist/validatable/negative-parameters';
import NegativeString from '../../dist/assert/string/negative-parameters';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

describe(`compiler compatible`,function() {

    let greater = Negative<string>(2,  NegativeString);

    it('set valid', ()=>{

        try {
            // @ts-expecerror
            greater.valid = true;

        } catch (e) {

            expect(e).toBeInstanceOf(Error);
        }

    });

    it('set value', ()=>{

        try {
            // @ts-expecerror
            greater.value = 3;

        } catch (e) {

            expect(e).toBeInstanceOf(Error);
        }

    });

    it('set minimum', ()=>{

        try {
            // @ts-expecerror
            greater.maximum = 3;

        } catch (e) {

            expect(e).toBeInstanceOf(Error);
        }

    });

    it('set inclusive', ()=>{

        try {
            // @ts-expecerror
            greater.inclusive = true;

        } catch (e) {

            expect(e).toBeInstanceOf(Error);
        }

    });

});


describe(`integer`,function() {

    describe(`negative`,function() {

        let greater = Negative<string>(-1,  NegativeString);

        it('validate object', ()=>{

            expect(greater.valid).toBeTrue();
            expect(greater.value).toBe(-1);
        });
    });

    describe(`positive`,function() {

        let greater = Negative<string>(1,  NegativeString);

        it('validate object', ()=>{

            expect(greater.valid).toBeFalse();
            expect(greater.value).toBe(1);
        });
    });
});

describe(`float`,function() {

    describe(`negative`,function() {

        let greater = Negative<string>(-1.1,  NegativeString);

        it('validate object', ()=>{

            expect(greater.valid).toBeTrue();
            expect(greater.value).toBe(-1.1);
        });
    });

    describe(`positive`,function() {

        let greater = Negative<string>(1.1,  NegativeString);

        it('validate object', ()=>{

            expect(greater.valid).toBeFalse();
            expect(greater.value).toBe(1.1);
        });
    });
});

describe(`infinity`,function() {

    describe(`negative`,function() {

        let greater = Negative<string>(-Infinity,  NegativeString);

        it('validate object', ()=>{

            expect(greater.valid).toBeTrue();
            expect(greater.value).toBe(-Infinity);
        });
    });

    describe(`positive`,function() {

        let greater = Negative<string>(Infinity,  NegativeString);

        it('validate object', ()=>{

            expect(greater.valid).toBeFalse();
            expect(greater.value).toBe(Infinity);
        });
    });
});
