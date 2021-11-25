import Positive from "../../dist/validatable/positive-parameters";
import PositiveString from "../../dist/assert/string/positive-parameters";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

describe(`compiler compatible`,function() {

    let greater = Positive<string>(2,  PositiveString);

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

    describe(`positive`,function() {

        let greater = Positive<string>(1,  PositiveString);

        it('validate object', ()=>{

            expect(greater.valid).toBeTrue();
            expect(greater.value).toBe(1);
        })
    });

    describe(`positive`,function() {

        let greater = Positive<string>(-1,  PositiveString);

        it('validate object', ()=>{

            expect(greater.valid).toBeFalse();
            expect(greater.value).toBe(-1);
        })
    });
});

describe(`float`,function() {

    describe(`positive`,function() {

        let greater = Positive<string>(1.1,  PositiveString);

        it('validate object', ()=>{

            expect(greater.valid).toBeTrue();
            expect(greater.value).toBe(1.1);
        })
    });

    describe(`positive`,function() {

        let greater = Positive<string>(-1.1,  PositiveString);

        it('validate object', ()=>{

            expect(greater.valid).toBeFalse();
            expect(greater.value).toBe(-1.1);
        })
    });
});

describe(`infinity`,function() {

    describe(`positive`,function() {

        let greater = Positive<string>(Infinity,  PositiveString);

        it('validate object', ()=>{

            expect(greater.valid).toBeTrue();
            expect(greater.value).toBe(Infinity);
        })
    });

    describe(`positive`,function() {

        let greater = Positive<string>(-Infinity,  PositiveString);

        it('validate object', ()=>{

            expect(greater.valid).toBeFalse();
            expect(greater.value).toBe(-Infinity);
        })
    });
});
