import Validator from '../../dist/validatable/integer-parameters';
import IntegerMessage from '../../dist/assert/string/integer-parameters';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

describe(`compiler compatible`,function() {

    it(`valid value`,function() {

        let validatable = Validator(10, IntegerMessage);

        // compiler pass
        if(validatable.valid) {

            let integer : number = validatable.value;
            expect(integer).toBe(10);

        } else {

            let integer : number = validatable.value;
            fail('validatable.valid should false');
        }
    });

    it(`readonly`,function() {

        let validatable = Validator(1, IntegerMessage);

        try {
            // @ts-expecerror
            validatable.valid = true;
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }

        // @ts-expecerror
        validatable.value = true;

        try {
            // @ts-expecerror
            validatable.message = 'message';
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }

    });
});


describe(`integer`,function() {

    it(`positive`,function() {

        let validatable = Validator(1, IntegerMessage);

        expect(validatable.valid).toBe(true);
        expect(validatable.value).toBe(1);
        expect(typeof validatable.message).toBe('string');

    });

    it(`negative`,function() {

        let validatable = Validator(-1, IntegerMessage);

        expect(validatable.valid).toBe(true);
        expect(validatable.value).toBe(-1);
        expect(typeof validatable.message).toBe('string');

    });
});


describe(`float`,function() {

    it(`positive`,function() {

        let validatable = Validator(1.0, IntegerMessage);

        expect(validatable.valid).toBe(true);
        expect(validatable.value).toBe(1.0);
        expect(typeof validatable.message).toBe('string');

    });

    it(`negative`,function() {

        let validatable = Validator(-1.0, IntegerMessage);

        expect(validatable.valid).toBe(true);
        expect(validatable.value).toBe(-1.0);
        expect(typeof validatable.message).toBe('string');

    });
});

describe(`infinity`,function() {

    it(`positive`,function() {

        let validatable = Validator(Infinity, IntegerMessage);

        expect(validatable.valid).toBe(false);
        expect(validatable.value).toBe(Infinity);
        expect(typeof validatable.message).toBe('string');

    });

    it(`negative`,function() {

        let validatable = Validator(-Infinity, IntegerMessage);

        expect(validatable.valid).toBe(false);
        expect(validatable.value).toBe(-Infinity);
        expect(typeof validatable.message).toBe('string');

    });
});


it(`NaN`,function() {

    let validatable = Validator(NaN, IntegerMessage);

    expect(validatable.valid).toBe(false);
    expect(validatable.value).toEqual(NaN);
    expect(typeof validatable.message).toBe('string');

});




