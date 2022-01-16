import GreaterFromObject from "../../../dist/minimum/validatable/lower-than-maximum-parameter";
import GreaterString from "../../../dist/minimum/string/lower-than-maximum-parameter";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

describe(`compiler compatible`,function() {

    let greater = new GreaterFromObject({maximum:2, minimum:1, inclusive:false}, GreaterString);

    it('set valid', ()=>{

        try {
            // @ts-expecerror
            greater.valid = true;

        } catch (e) {

            expect(e).toBeInstanceOf(Error);
        }

    });

    it('set value', ()=>{

        try {
            // @ts-expecerror
            greater.value = 3;

        } catch (e) {

            expect(e).toBeInstanceOf(Error);
        }

    });

    it('set minimum', ()=>{

        try {
            // @ts-expecerror
            greater.minimum = 3;

        } catch (e) {

            expect(e).toBeInstanceOf(Error);
        }

    });

    it('set inclusive', ()=>{

        try {
            // @ts-expecerror
            greater.inclusive = true;

        } catch (e) {

            expect(e).toBeInstanceOf(Error);
        }

    });

});


describe(`value equal to minimum`,function() {

    describe(`inclusive`,function() {

        let greater = new GreaterFromObject({maximum:1, minimum:1, inclusive:true}, GreaterString);

        it('validate object', ()=>{

            expect(greater.valid).toBeTrue();
            expect(greater.value.maximum).toBe(1);
            expect(greater.value.minimum).toBe(1);
            expect(greater.value.inclusive).toBeTrue();

        })
    });

    describe(`exclusive`,function() {

        let greater = new GreaterFromObject({maximum:1, minimum:1, inclusive:false}, GreaterString);

        it('validate object', ()=>{

            expect(greater.valid).toBeFalse();
            expect(greater.value.maximum).toBe(1);
            expect(greater.value.minimum).toBe(1);
            expect(greater.value.inclusive).toBeFalse();

        })
    });
});

describe(`value greater to minimum`,function() {

    describe(`inclusive`,function() {

        let greater = new GreaterFromObject({maximum:2, minimum:1, inclusive:true}, GreaterString);

        it('validate object', ()=>{

            expect(greater.valid).toBeTrue();
            expect(greater.value.maximum).toBe(2);
            expect(greater.value.minimum).toBe(1);
            expect(greater.value.inclusive).toBeTrue();

        })
    });

    describe(`exclusive`,function() {

        let greater = new GreaterFromObject({maximum:2, minimum:1, inclusive:false}, GreaterString);

        it('validate object', ()=>{

            expect(greater.valid).toBeTrue();
            expect(greater.value.maximum).toBe(2);
            expect(greater.value.minimum).toBe(1);
            expect(greater.value.inclusive).toBeFalse();

        })
    });
});

describe(`value lower to minimum`,function() {

    describe(`inclusive`,function() {

        let greater = new GreaterFromObject({maximum:-1, minimum:1, inclusive:true}, GreaterString);

        it('validate object', ()=>{

            expect(greater.valid).toBeFalse();
            expect(greater.value.maximum).toBe(-1);
            expect(greater.value.minimum).toBe(1);
            expect(greater.value.inclusive).toBeTrue();

        })
    });

    describe(`exclusive`,function() {

        let greater = new GreaterFromObject({maximum:-1, minimum:1, inclusive:false}, GreaterString);

        it('validate object', ()=>{

            expect(greater.valid).toBeFalse();
            expect(greater.value.maximum).toBe(-1);
            expect(greater.value.minimum).toBe(1);
            expect(greater.value.inclusive).toBeFalse();

        })
    });
});
