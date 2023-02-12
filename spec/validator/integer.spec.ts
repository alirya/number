import {IntegerParameters} from '../../dist/validator/integer.js';
import IntegerMessage from '../../dist/assert/string/integer.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

describe(`compiler compatible`,function() {

    it(`valid value`,function() {

        const validator = IntegerParameters(IntegerMessage.Parameters);
        const validatable = validator(10);

        // compiler pass
        if(validatable.valid) {

            const integer : number = validatable.value;
            expect(integer).toBe(10);

        } else {

            const integer : number = validatable.value;
            fail('validatable.valid should false');
        }
    });

    it(`readonly`,function() {

        const validator = IntegerParameters(IntegerMessage.Parameters);
        const validatable = validator(1);

        try {
            // @ts-expect-error
            validatable.valid = true;
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }

        // @ts-expect-error
        validatable.value = true;

        try {
            // @ts-expect-error
            validatable.message.js = 'message.js';
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }

    });
});


describe(`integer`,function() {

    it(`positive`,function() {

        const validator = IntegerParameters(IntegerMessage.Parameters);
        const validatable = validator(1);

        expect(validatable.valid).toBe(true);
        expect(validatable.value).toBe(1);
        expect(typeof validatable.message).toBe('string');

    });

    it(`negative`,function() {

        const validator = IntegerParameters(IntegerMessage.Parameters);
        const validatable = validator(-1);

        expect(validatable.valid).toBe(true);
        expect(validatable.value).toBe(-1);
        expect(typeof validatable.message).toBe('string');

    });
});


describe(`float`,function() {

    it(`positive`,function() {

        const validator = IntegerParameters(IntegerMessage.Parameters);
        const validatable = validator(1.0);

        expect(validatable.valid).toBe(true);
        expect(validatable.value).toBe(1.0);
        expect(typeof validatable.message).toBe('string');

    });

    it(`negative`,function() {

        const validator = IntegerParameters(IntegerMessage.Parameters);
        const validatable = validator(-1.0);

        expect(validatable.valid).toBe(true);
        expect(validatable.value).toBe(-1.0);
        expect(typeof validatable.message).toBe('string');

    });
});

describe(`infinity`,function() {

    it(`positive`,function() {

        const validator = IntegerParameters(IntegerMessage.Parameters);
        const validatable = validator(Infinity);

        expect(validatable.valid).toBe(false);
        expect(validatable.value).toBe(Infinity);
        expect(typeof validatable.message).toBe('string');

    });

    it(`negative`,function() {

        const validator = IntegerParameters(IntegerMessage.Parameters);
        const validatable = validator(-Infinity);

        expect(validatable.valid).toBe(false);
        expect(validatable.value).toBe(-Infinity);
        expect(typeof validatable.message).toBe('string');

    });
});


it(`NaN`,function() {

    const validator = IntegerParameters(IntegerMessage.Parameters);
    const validatable = validator(NaN);

    expect(validatable.valid).toBe(false);
    expect(validatable.value).toEqual(NaN);
    expect(typeof validatable.message).toBe('string');

});




