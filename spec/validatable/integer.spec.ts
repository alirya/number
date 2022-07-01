import {IntegerParameters} from '../../dist/validatable/integer';
import IntegerMessage from '../../dist/assert/string/integer';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

describe(`compiler compatible`,function() {

    it(`valid value`,function() {

        let validatable = IntegerParameters(10, IntegerMessage.Parameters);

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

        let validatable = IntegerParameters(1, IntegerMessage.Parameters);

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


describe(`integer`,function() {

    it(`positive`,function() {

        let validatable = IntegerParameters(1, IntegerMessage.Parameters);

        expect(validatable.valid).toBe(true);
        expect(validatable.value).toBe(1);
        expect(typeof validatable.message).toBe('string');

    });

    it(`negative`,function() {

        let validatable = IntegerParameters(-1, IntegerMessage.Parameters);

        expect(validatable.valid).toBe(true);
        expect(validatable.value).toBe(-1);
        expect(typeof validatable.message).toBe('string');

    });
});


describe(`float`,function() {

    it(`positive`,function() {

        let validatable = IntegerParameters(1.0, IntegerMessage.Parameters);

        expect(validatable.valid).toBe(true);
        expect(validatable.value).toBe(1.0);
        expect(typeof validatable.message).toBe('string');

    });

    it(`negative`,function() {

        let validatable = IntegerParameters(-1.0, IntegerMessage.Parameters);

        expect(validatable.valid).toBe(true);
        expect(validatable.value).toBe(-1.0);
        expect(typeof validatable.message).toBe('string');

    });
});

describe(`infinity`,function() {

    it(`positive`,function() {

        let validatable = IntegerParameters(Infinity, IntegerMessage.Parameters);

        expect(validatable.valid).toBe(false);
        expect(validatable.value).toBe(Infinity);
        expect(typeof validatable.message).toBe('string');

    });

    it(`negative`,function() {

        let validatable = IntegerParameters(-Infinity, IntegerMessage.Parameters);

        expect(validatable.valid).toBe(false);
        expect(validatable.value).toBe(-Infinity);
        expect(typeof validatable.message).toBe('string');

    });
});


it(`NaN`,function() {

    let validatable = IntegerParameters(NaN, IntegerMessage.Parameters);

    expect(validatable.valid).toBe(false);
    expect(validatable.value).toEqual(NaN);
    expect(typeof validatable.message).toBe('string');

});




