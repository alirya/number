import {NumberParameters} from '../../dist/validator/number.js';
import NumberMessage from '../../dist/assert/string/number.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

describe(`compiler compatible`,function() {

    it(`valid value`,function() {

        const validator = NumberParameters(NumberMessage.Parameters);
        const validatable = validator(<unknown>10);

        if(validatable.valid) {

            // compiler pass
            const number : number = validatable.value;
            expect(number).toBe(10);

        } else {

            // @ts-expect-error
            const number : number = validatable.value;
            fail('validatable.valid should false');
        }
    });

    it(`invalid value`,function() {

        const validator = NumberParameters(NumberMessage.Parameters);
        const validatable = validator({});

        if(validatable.valid) {

            // compiler pass
            const number : number = validatable.value;
            fail('validatable.valid should false');

        } else {

            // @ts-expect-error
            const number : number = validatable.value;
            // @ts-expect-error
            expect(number).toEqual({});
        }
    });

    it(`readonly`,function() {

        const validator = NumberParameters(NumberMessage.Parameters);
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


it(`valid`,function() {

    const validator = NumberParameters(NumberMessage.Parameters);
    const validatable = validator(1);

    expect(validatable.valid).toBe(true);
    expect(validatable.value).toBe(1);
    expect(typeof validatable.message).toBe('string');

});

it(`invalid`,function() {

    const validator = NumberParameters(NumberMessage.Parameters);
    const validatable = validator('a');

    expect(validatable.valid).toBe(false);
    expect(validatable.value).toBe('a');
    expect(typeof validatable.message).toBe('string');

});



