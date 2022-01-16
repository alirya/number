import Lower from "../../dist/validator/lower-parameters";
import LowerString from "../../dist/assert/string/lower-parameters";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

describe(`compiler compatible`,function() {

    let validator = Lower<string>(1, false, LowerString);
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


describe(`value equal to minimum`,function() {

    describe(`inclusive`,function() {

        let validator = Lower<string>(1, true, LowerString);
        let validatable = validator(1);

        it('validate object', ()=>{

            expect(validatable.valid).toBeTrue();
            expect(validatable.value).toBe(1);
            expect(validatable.maximum).toBe(1);
            expect(validatable.inclusive).toBeTrue();

        })
    });

    describe(`exclusive`,function() {

        let validator = Lower<string>(1, false, LowerString);
        let validatable = validator(1);

        it('validate object', ()=>{

            expect(validatable.valid).toBeFalse();
            expect(validatable.value).toBe(1);
            expect(validatable.maximum).toBe(1);
            expect(validatable.inclusive).toBeFalse();

        })
    });
});

describe(`value greater to minimum`,function() {

    describe(`inclusive`,function() {

        let validator = Lower<string>( 1, true, LowerString);
        let validatable = validator(2);

        it('validate object', ()=>{

            expect(validatable.valid).toBeFalse();
            expect(validatable.value).toBe(2);
            expect(validatable.maximum).toBe(1);
            expect(validatable.inclusive).toBeTrue();

        })
    });

    describe(`exclusive`,function() {

        let validator = Lower<string>( 1, false, LowerString);
        let validatable = validator(2);

        it('validate object', ()=>{

            expect(validatable.valid).toBeFalse();
            expect(validatable.value).toBe(2);
            expect(validatable.maximum).toBe(1);
            expect(validatable.inclusive).toBeFalse();

        })
    });
});

describe(`value lower to minimum`,function() {

    describe(`inclusive`,function() {

        let validator = Lower<string>( 1, true, LowerString);
        let validatable = validator(-1);

        it('validate object', ()=>{

            expect(validatable.valid).toBeTrue();
            expect(validatable.value).toBe(-1);
            expect(validatable.maximum).toBe(1);
            expect(validatable.inclusive).toBeTrue();

        })
    });

    describe(`exclusive`,function() {

        let validator = Lower<string>( 1, false, LowerString);
        let validatable = validator(-1);

        it('validate object', ()=>{

            expect(validatable.valid).toBeTrue();
            expect(validatable.value).toBe(-1);
            expect(validatable.maximum).toBe(1);
            expect(validatable.inclusive).toBeFalse();

        })
    });
});
