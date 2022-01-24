import ValidatorStandard from '../../dist/validatable/number-parameters';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

describe(`compiler compatible`,function() {

    it(`valid value`,function() {

        let validatable = ValidatorStandard(<unknown>10);

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

        let validatable = ValidatorStandard(<unknown>{});

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

        let validatable = ValidatorStandard(<unknown>1);

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

    let validatable = ValidatorStandard(1);

    expect(validatable.valid).toBe(true);
    expect(validatable.value).toBe(1);
    expect(typeof validatable.message).toBe('string');

});

it(`invalid`,function() {

    let validatable = ValidatorStandard('a');

    expect(validatable.valid).toBe(false);
    expect(validatable.value).toBe('a');
    expect(typeof validatable.message).toBe('string');

});



