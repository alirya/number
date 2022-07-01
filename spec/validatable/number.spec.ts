import {NumberParameters} from '../../dist/validatable/number';
import NumberMessage from '../../dist/assert/string/number';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

describe(`compiler compatible`,function() {

    it(`valid value`,function() {

        let validatable = NumberParameters(<unknown>10, NumberMessage.Parameters);

        if(validatable.valid) {

            // compiler pass
            let number : number = validatable.value;
            expect(number).toBe(10);

        } else {

            // @ts-expect-error
            let number : number = validatable.value;
            fail('validatable.valid should false');
        }
    });

    it(`invalid value`,function() {

        let validatable = NumberParameters(<unknown>{}, NumberMessage.Parameters);

        if(validatable.valid) {

            // compiler pass
            let number : number = validatable.value;
            fail('validatable.valid should false');

        } else {

            // @ts-expect-error
            let number : number = validatable.value;
            // @ts-expect-error
            expect(number).toEqual({});
        }
    });

    it(`readonly`,function() {

        let validatable = NumberParameters(<unknown>1, NumberMessage.Parameters);

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
            validatable.message = 'message';
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }

    });
});


it(`valid`,function() {

    let validatable = NumberParameters(1, NumberMessage.Parameters);

    expect(validatable.valid).toBe(true);
    expect(validatable.value).toBe(1);
    expect(typeof validatable.message).toBe('string');

});

it(`invalid`,function() {

    let validatable = NumberParameters('a', NumberMessage.Parameters);

    expect(validatable.valid).toBe(false);
    expect(validatable.value).toBe('a');
    expect(typeof validatable.message).toBe('string');

});



