import {InfiniteParameters} from '../../dist/validatable/infinite.js';
import InfiniteString from '../../dist/assert/string/infinite.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

describe(`compiler compatible`,function() {

    const greater = InfiniteParameters<string>(2,  InfiniteString.Parameters);

    it('set valid', ()=>{

        try {
            // @ts-expect-error
            greater.valid = true;

        } catch (e) {

            expect(e).toBeInstanceOf(Error);
        }

    });

    it('set value', ()=>{

        try {
            // @ts-expect-error
            greater.value = 3;

        } catch (e) {

            expect(e).toBeInstanceOf(Error);
        }

    });

    it('set minimum', ()=>{

        try {
            // @ts-expect-error
            greater.maximum = 3;

        } catch (e) {

            expect(e).toBeInstanceOf(Error);
        }

    });

    it('set inclusive', ()=>{

        try {
            // @ts-expect-error
            greater.inclusive = true;

        } catch (e) {

            expect(e).toBeInstanceOf(Error);
        }

    });

});


describe(`integer`,function() {

    describe(``,function() {

        const greater = InfiniteParameters<string>(1,  InfiniteString.Parameters);

        it('validate object', ()=>{

            expect(greater.valid).toBeFalse();
            expect(greater.value).toBe(1);
        });
    });

    describe(`positive`,function() {

        const greater = InfiniteParameters<string>(-1,  InfiniteString.Parameters);

        it('validate object', ()=>{

            expect(greater.valid).toBeFalse();
            expect(greater.value).toBe(-1);
        });
    });
});

describe(`float`,function() {

    describe(`positive`,function() {

        const greater = InfiniteParameters<string>(1.1,  InfiniteString.Parameters);

        it('validate object', ()=>{

            expect(greater.valid).toBeFalse();
            expect(greater.value).toBe(1.1);
        });
    });

    describe(`positive`,function() {

        const greater = InfiniteParameters<string>(-1.1,  InfiniteString.Parameters);

        it('validate object', ()=>{

            expect(greater.valid).toBeFalse();
            expect(greater.value).toBe(-1.1);
        });
    });
});

describe(`infinity`,function() {

    describe(`positive`,function() {

        const greater = InfiniteParameters<string>(Infinity,  InfiniteString.Parameters);

        it('validate object', ()=>{

            expect(greater.valid).toBeTrue();
            expect(greater.value).toBe(Infinity);
        });
    });

    describe(`positive`,function() {

        const greater = InfiniteParameters<string>(-Infinity,  InfiniteString.Parameters);

        it('validate object', ()=>{

            expect(greater.valid).toBeTrue();
            expect(greater.value).toBe(-Infinity);
        });
    });
});
