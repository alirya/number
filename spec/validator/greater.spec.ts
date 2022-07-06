import {GreaterParameters} from '../../dist/validator/greater.js';
import GreaterString from '../../dist/assert/string/greater.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

describe(`compiler compatible`,function() {

    let validator = GreaterParameters<string>(1, false, GreaterString.Parameters);
    let validatable = validator(2);

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
            validatable.minimum = 3;

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


describe(`value equal to minimum`,function() {

    describe(`inclusive`,function() {

        let validator = GreaterParameters<string>( 1, true, GreaterString.Parameters);
        let validatable = validator(1);

        it('validate object', ()=>{

            expect(validatable.valid).toBeTrue();
            expect(validatable.value).toBe(1);
            expect(validatable.minimum).toBe(1);
            expect(validatable.inclusive).toBeTrue();

        });
    });

    describe(`exclusive`,function() {

        let validator = GreaterParameters<string>(1, false, GreaterString.Parameters);
        let validatable = validator(1);

        it('validate object', ()=>{

            expect(validatable.valid).toBeFalse();
            expect(validatable.value).toBe(1);
            expect(validatable.minimum).toBe(1);
            expect(validatable.inclusive).toBeFalse();

        });
    });
});

describe(`value greater to minimum`,function() {

    describe(`inclusive`,function() {

        let validator = GreaterParameters<string>( 1, true, GreaterString.Parameters);
        let validatable = validator(2);

        it('validate object', ()=>{

            expect(validatable.valid).toBeTrue();
            expect(validatable.value).toBe(2);
            expect(validatable.minimum).toBe(1);
            expect(validatable.inclusive).toBeTrue();

        });
    });

    describe(`exclusive`,function() {

        let validator = GreaterParameters<string>(1, false, GreaterString.Parameters);
        let validatable = validator(2);

        it('validate object', ()=>{

            expect(validatable.valid).toBeTrue();
            expect(validatable.value).toBe(2);
            expect(validatable.minimum).toBe(1);
            expect(validatable.inclusive).toBeFalse();

        });
    });
});

describe(`value lower to minimum`,function() {

    describe(`inclusive`,function() {

        let validator = GreaterParameters<string>(1, true, GreaterString.Parameters);
        let validatable = validator(-1);

        it('validate object', ()=>{

            expect(validatable.valid).toBeFalse();
            expect(validatable.value).toBe(-1);
            expect(validatable.minimum).toBe(1);
            expect(validatable.inclusive).toBeTrue();

        });
    });

    describe(`exclusive`,function() {

        let validator = GreaterParameters<string>(1, false, GreaterString.Parameters);
        let validatable = validator(-1);

        it('validate object', ()=>{

            expect(validatable.valid).toBeFalse();
            expect(validatable.value).toBe(-1);
            expect(validatable.minimum).toBe(1);
            expect(validatable.inclusive).toBeFalse();

        });
    });
});
