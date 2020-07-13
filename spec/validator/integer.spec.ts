import Validator from "../../dist/validator/integer";
import IntegerMessage from "../../dist/validatable/string/integer";

it("enable console log", () => { spyOn(console, 'log').and.callThrough()});

describe(`compiler compatible`,function() {

    it(`valid value`,function() {

        let validator = new Validator(IntegerMessage);
        let validatable = validator.validate(10);

        // compiler pass
        if(validatable.valid) {

            let integer : number = validatable.value;
            expect(integer).toBe(10);

        } else {

            let integer : number = validatable.value;
            fail('validatable.valid should false')
        }
    });

    it(`readonly`,function() {

        let validator = new Validator(IntegerMessage);
        let validatable = validator.validate(1);

        try {
            // @ts-expect-error
            validatable.valid = true;
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }

        try {
            // @ts-expect-error
            validatable.value = true;
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }

        try {
            // @ts-expect-error
            validatable.message = 'message';
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }

    });
});


describe(`integer`,function() {

    it(`positive`,function() {

        let validator = new Validator(IntegerMessage);
        let validatable = validator.validate(1);

        expect(validatable.valid).toBe(true);
        expect(validatable.value).toBe(1);
        expect(typeof validatable.message).toBe("string");

    });

    it(`negative`,function() {

        let validator = new Validator(IntegerMessage);
        let validatable = validator.validate(-1);

        expect(validatable.valid).toBe(true);
        expect(validatable.value).toBe(-1);
        expect(typeof validatable.message).toBe("string");

    });
});


describe(`float`,function() {

    it(`positive`,function() {

        let validator = new Validator(IntegerMessage);
        let validatable = validator.validate(1.0);

        expect(validatable.valid).toBe(true);
        expect(validatable.value).toBe(1.0);
        expect(typeof validatable.message).toBe("string");

    });

    it(`negative`,function() {

        let validator = new Validator(IntegerMessage);
        let validatable = validator.validate(-1.0);

        expect(validatable.valid).toBe(true);
        expect(validatable.value).toBe(-1.0);
        expect(typeof validatable.message).toBe("string");

    });
});

describe(`infinity`,function() {

    it(`positive`,function() {

        let validator = new Validator(IntegerMessage);
        let validatable = validator.validate(Infinity);

        expect(validatable.valid).toBe(false);
        expect(validatable.value).toBe(Infinity);
        expect(typeof validatable.message).toBe("string");

    });

    it(`negative`,function() {

        let validator = new Validator(IntegerMessage);
        let validatable = validator.validate(-Infinity);

        expect(validatable.valid).toBe(false);
        expect(validatable.value).toBe(-Infinity);
        expect(typeof validatable.message).toBe("string");

    });
});


it(`NaN`,function() {

    let validator = new Validator(IntegerMessage);
    let validatable = validator.validate(NaN);

    expect(validatable.valid).toBe(false);
    expect(validatable.value).toEqual(NaN);
    expect(typeof validatable.message).toBe("string");

});




