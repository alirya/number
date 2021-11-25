import Infinite from "../../dist/validatable/infinite-parameters";
import InfiniteString from "../../dist/assert/string/infinite-parameters";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

describe(`compiler compatible`,function() {

    let greater = Infinite<string>(2,  InfiniteString);

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

        let greater = Infinite<string>(1,  InfiniteString);

        it('validate object', ()=>{

            expect(greater.valid).toBeFalse();
            expect(greater.value).toBe(1);
        })
    });

    describe(`positive`,function() {

        let greater = Infinite<string>(-1,  InfiniteString);

        it('validate object', ()=>{

            expect(greater.valid).toBeFalse();
            expect(greater.value).toBe(-1);
        })
    });
});

describe(`float`,function() {

    describe(`positive`,function() {

        let greater = Infinite<string>(1.1,  InfiniteString);

        it('validate object', ()=>{

            expect(greater.valid).toBeFalse();
            expect(greater.value).toBe(1.1);
        })
    });

    describe(`positive`,function() {

        let greater = Infinite<string>(-1.1,  InfiniteString);

        it('validate object', ()=>{

            expect(greater.valid).toBeFalse();
            expect(greater.value).toBe(-1.1);
        })
    });
});

describe(`infinity`,function() {

    describe(`positive`,function() {

        let greater = Infinite<string>(Infinity,  InfiniteString);

        it('validate object', ()=>{

            expect(greater.valid).toBeTrue();
            expect(greater.value).toBe(Infinity);
        })
    });

    describe(`positive`,function() {

        let greater = Infinite<string>(-Infinity,  InfiniteString);

        it('validate object', ()=>{

            expect(greater.valid).toBeTrue();
            expect(greater.value).toBe(-Infinity);
        })
    });
});
