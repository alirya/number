import {NegativeParameters} from '../../dist/validator/negative.js';
import NegativeString from '../../dist/assert/string/negative.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

describe(`compiler compatible`,function() {

    const validator = NegativeParameters<string>(NegativeString.Parameters);
    const validatable = validator(2);

    it('set valid', ()=>{

        try {
            // @ts-expect-error
            validatable.valid = true;

        } catch (e) {

            expect(e).toBeInstanceOf(Error);
        }

    });

    it('set value', ()=>{

        try {
            // @ts-expect-error
            validatable.value = 3;

        } catch (e) {

            expect(e).toBeInstanceOf(Error);
        }

    });

    it('set minimum', ()=>{

        try {
            // @ts-expect-error
            validatable.maximum = 3;

        } catch (e) {

            expect(e).toBeInstanceOf(Error);
        }

    });

    it('set inclusive', ()=>{

        try {
            // @ts-expect-error
            validatable.inclusive = true;

        } catch (e) {

            expect(e).toBeInstanceOf(Error);
        }

    });

});


describe(`integer`,function() {

    describe(`negative`,function() {

        const validator = NegativeParameters<string>(NegativeString.Parameters);
        const validatable = validator(-1);

        it('validate object', ()=>{

            expect(validatable.valid).toBeTrue();
            expect(validatable.value).toBe(-1);
        });
    });

    describe(`positive`,function() {

        const validator = NegativeParameters<string>(NegativeString.Parameters);
        const validatable = validator(1);

        it('validate object', ()=>{

            expect(validatable.valid).toBeFalse();
            expect(validatable.value).toBe(1);
        });
    });
});

describe(`float`,function() {

    describe(`negative`,function() {

        const validator = NegativeParameters<string>(NegativeString.Parameters);
        const validatable = validator(-1.1);

        it('validate object', ()=>{

            expect(validatable.valid).toBeTrue();
            expect(validatable.value).toBe(-1.1);
        });
    });

    describe(`positive`,function() {

        const validator = NegativeParameters<string>(NegativeString.Parameters);
        const validatable = validator(1.1);

        it('validate object', ()=>{

            expect(validatable.valid).toBeFalse();
            expect(validatable.value).toBe(1.1);
        });
    });
});

describe(`infinity`,function() {

    describe(`negative`,function() {

        const validator = NegativeParameters<string>(NegativeString.Parameters);
        const validatable = validator(-Infinity);

        it('validate object', ()=>{

            expect(validatable.valid).toBeTrue();
            expect(validatable.value).toBe(-Infinity);
        });
    });

    describe(`positive`,function() {

        const validator = NegativeParameters<string>(NegativeString.Parameters);
        const validatable = validator(Infinity);

        it('validate object', ()=>{

            expect(validatable.valid).toBeFalse();
            expect(validatable.value).toBe(Infinity);
        });
    });
});
