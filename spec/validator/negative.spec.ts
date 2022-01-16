import Negative from '../../dist/validator/negative-parameters';
import NegativeString from '../../dist/assert/string/negative-parameters';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

describe(`compiler compatible`,function() {

    let validator = Negative<string>(NegativeString);
    let validatable = validator(2);

    it('set valid', ()=>{

        try {
            // @ts-expecerror
            validatable.valid = true;

        } catch (e) {

            expect(e).toBeInstanceOf(Error);
        }

    });

    it('set value', ()=>{

        try {
            // @ts-expecerror
            validatable.value = 3;

        } catch (e) {

            expect(e).toBeInstanceOf(Error);
        }

    });

    it('set minimum', ()=>{

        try {
            // @ts-expecerror
            validatable.maximum = 3;

        } catch (e) {

            expect(e).toBeInstanceOf(Error);
        }

    });

    it('set inclusive', ()=>{

        try {
            // @ts-expecerror
            validatable.inclusive = true;

        } catch (e) {

            expect(e).toBeInstanceOf(Error);
        }

    });

});


describe(`integer`,function() {

    describe(`negative`,function() {

        let validator = Negative<string>(NegativeString);
        let validatable = validator(-1);

        it('validate object', ()=>{

            expect(validatable.valid).toBeTrue();
            expect(validatable.value).toBe(-1);
        });
    });

    describe(`positive`,function() {

        let validator = Negative<string>(NegativeString);
        let validatable = validator(1);

        it('validate object', ()=>{

            expect(validatable.valid).toBeFalse();
            expect(validatable.value).toBe(1);
        });
    });
});

describe(`float`,function() {

    describe(`negative`,function() {

        let validator = Negative<string>(NegativeString);
        let validatable = validator(-1.1);

        it('validate object', ()=>{

            expect(validatable.valid).toBeTrue();
            expect(validatable.value).toBe(-1.1);
        });
    });

    describe(`positive`,function() {

        let validator = Negative<string>(NegativeString);
        let validatable = validator(1.1);

        it('validate object', ()=>{

            expect(validatable.valid).toBeFalse();
            expect(validatable.value).toBe(1.1);
        });
    });
});

describe(`infinity`,function() {

    describe(`negative`,function() {

        let validator = Negative<string>(NegativeString);
        let validatable = validator(-Infinity);

        it('validate object', ()=>{

            expect(validatable.valid).toBeTrue();
            expect(validatable.value).toBe(-Infinity);
        });
    });

    describe(`positive`,function() {

        let validator = Negative<string>(NegativeString);
        let validatable = validator(Infinity);

        it('validate object', ()=>{

            expect(validatable.valid).toBeFalse();
            expect(validatable.value).toBe(Infinity);
        });
    });
});
