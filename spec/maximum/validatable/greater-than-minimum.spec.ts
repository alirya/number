import {GreaterThanMinimumParameter} from '../../../dist/maximum/validatable/greater-than-minimum';
import GreaterString from '../../../dist/maximum/string/greater-than-minimum';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

describe(`compiler compatible`,function() {

    let greater = new GreaterThanMinimumParameter({maximum:2, minimum:1, inclusive:false}, GreaterString.Parameter);

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
            greater.minimum = 3;

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


describe(`value equal to minimum`,function() {

    describe(`inclusive`,function() {

        let greater = new GreaterThanMinimumParameter({maximum:1, minimum:1, inclusive:true}, GreaterString.Parameter);

        it('validate object', ()=>{

            expect(greater.valid).toBeTrue();
            expect(greater.value.maximum).toBe(1);
            expect(greater.value.minimum).toBe(1);
            expect(greater.value.inclusive).toBeTrue();

        });
    });

    describe(`exclusive`,function() {

        let greater = new GreaterThanMinimumParameter({maximum:1, minimum:1, inclusive:false}, GreaterString.Parameter);

        it('validate object', ()=>{

            expect(greater.valid).toBeFalse();
            expect(greater.value.maximum).toBe(1);
            expect(greater.value.minimum).toBe(1);
            expect(greater.value.inclusive).toBeFalse();

        });
    });
});

describe(`value greater to minimum`,function() {

    describe(`inclusive`,function() {

        let greater = new GreaterThanMinimumParameter({maximum:2, minimum:1, inclusive:true}, GreaterString.Parameter);

        it('validate object', ()=>{

            expect(greater.valid).toBeTrue();
            expect(greater.value.maximum).toBe(2);
            expect(greater.value.minimum).toBe(1);
            expect(greater.value.inclusive).toBeTrue();

        });
    });

    describe(`exclusive`,function() {

        let greater = new GreaterThanMinimumParameter({maximum:2, minimum:1, inclusive:false}, GreaterString.Parameter);

        it('validate object', ()=>{

            expect(greater.valid).toBeTrue();
            expect(greater.value.maximum).toBe(2);
            expect(greater.value.minimum).toBe(1);
            expect(greater.value.inclusive).toBeFalse();

        });
    });
});

describe(`value lower to minimum`,function() {

    describe(`inclusive`,function() {

        let greater = new GreaterThanMinimumParameter({maximum:-1, minimum:1, inclusive:true}, GreaterString.Parameter);

        it('validate object', ()=>{

            expect(greater.valid).toBeFalse();
            expect(greater.value.maximum).toBe(-1);
            expect(greater.value.minimum).toBe(1);
            expect(greater.value.inclusive).toBeTrue();

        });
    });

    describe(`exclusive`,function() {

        let greater = new GreaterThanMinimumParameter({maximum:-1, minimum:1, inclusive:false}, GreaterString.Parameter);

        it('validate object', ()=>{

            expect(greater.valid).toBeFalse();
            expect(greater.value.maximum).toBe(-1);
            expect(greater.value.minimum).toBe(1);
            expect(greater.value.inclusive).toBeFalse();

        });
    });
});
