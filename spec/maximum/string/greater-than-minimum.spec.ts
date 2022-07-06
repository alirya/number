import {GreaterThanMinimumParameter} from '../../../dist/maximum/string/greater-than-minimum.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

describe(`integer`,function() {

    describe(`exclusive`,function() {

        it(`positive`, () => {
            expect(GreaterThanMinimumParameter({maximum:1, minimum:1, inclusive:false, valid:false})).toBe('maximum "1" must greater than minimum "1".');
            expect(GreaterThanMinimumParameter({maximum:1, minimum:10, inclusive:false, valid:true})).toBe('maximum "1" is greater than minimum "10".');
        });

        it(`negative`, () => {
            expect(GreaterThanMinimumParameter({maximum:-1, minimum:-1, inclusive:false, valid:false})).toBe('maximum "-1" must greater than minimum "-1".');
            expect(GreaterThanMinimumParameter({maximum:-1, minimum:-10, inclusive:false, valid:true})).toBe('maximum "-1" is greater than minimum "-10".');
        });

    });

    describe(`inclusive`,function() {

        it(`positive`, () => {
            expect(GreaterThanMinimumParameter({maximum:1, minimum:1, inclusive:true, valid:false})).toBe('maximum "1" must greater or equal than minimum "1".');
            expect(GreaterThanMinimumParameter({maximum:1, minimum:10, inclusive:true, valid:true})).toBe('maximum "1" is greater or equal than minimum "10".');
        });

        it(`negative`, () => {
            expect(GreaterThanMinimumParameter({maximum:-1, minimum:-1, inclusive:true, valid:false})).toBe('maximum "-1" must greater or equal than minimum "-1".');
            expect(GreaterThanMinimumParameter({maximum:-1, minimum:-10, inclusive:true, valid:true})).toBe('maximum "-1" is greater or equal than minimum "-10".');
        });

    });
});

describe(`float`,function() {

    describe(`inclusive`,function() {

        it(`positive`, () => {
            expect(GreaterThanMinimumParameter({maximum:1.1, minimum:1.1, inclusive:true, valid:false})).toBe('maximum "1.1" must greater or equal than minimum "1.1".');
            expect(GreaterThanMinimumParameter({maximum:1.1, minimum:10.1, inclusive:true, valid:true})).toBe('maximum "1.1" is greater or equal than minimum "10.1".');
        });

        it(`negative`, () => {
            expect(GreaterThanMinimumParameter({maximum:-1.2, minimum:-1.1, inclusive:true, valid:false})).toBe('maximum "-1.2" must greater or equal than minimum "-1.1".');
            expect(GreaterThanMinimumParameter({maximum:-1.2, minimum:-10.1, inclusive:true, valid:true})).toBe('maximum "-1.2" is greater or equal than minimum "-10.1".');
        });

    });

    describe(`exclusive`,function() {

        it(`positive`, () => {
            expect(GreaterThanMinimumParameter({maximum:1.1, minimum:1.1, inclusive:false, valid:false})).toBe('maximum "1.1" must greater than minimum "1.1".');
            expect(GreaterThanMinimumParameter({maximum:1.1, minimum:10.1, inclusive:false, valid:true})).toBe('maximum "1.1" is greater than minimum "10.1".');
        });

        it(`negative`, () => {
            expect(GreaterThanMinimumParameter({maximum:-1.2, minimum:-1.1, inclusive:false, valid:false})).toBe('maximum "-1.2" must greater than minimum "-1.1".');
            expect(GreaterThanMinimumParameter({maximum:-1.2, minimum:-10.1, inclusive:false, valid:true})).toBe('maximum "-1.2" is greater than minimum "-10.1".');
        });

    });
});

describe(`infinity`,function() {

    describe(`infinity`,function() {

        it(`inclusive`, () => {
            expect(GreaterThanMinimumParameter({maximum:Infinity, minimum:Infinity, inclusive:true, valid:false})).toBe('maximum "Infinity" must greater or equal than minimum "Infinity".');
            expect(GreaterThanMinimumParameter({maximum:Infinity, minimum:Infinity, inclusive:true, valid:true})).toBe('maximum "Infinity" is greater or equal than minimum "Infinity".');
        });

        it(`negative`, () => {
            expect(GreaterThanMinimumParameter({maximum:-Infinity, minimum:-Infinity, inclusive:true, valid:false})).toBe('maximum "-Infinity" must greater or equal than minimum "-Infinity".');
            expect(GreaterThanMinimumParameter({maximum:-Infinity, minimum:-Infinity, inclusive:true, valid:true})).toBe('maximum "-Infinity" is greater or equal than minimum "-Infinity".');
        });

    });

    describe(`exclusive`,function() {

        it(`positive`, () => {
            expect(GreaterThanMinimumParameter({maximum:Infinity, minimum:Infinity, inclusive:false, valid:false})).toBe('maximum "Infinity" must greater than minimum "Infinity".');
            expect(GreaterThanMinimumParameter({maximum:Infinity, minimum:Infinity, inclusive:false, valid:true})).toBe('maximum "Infinity" is greater than minimum "Infinity".');
        });

        it(`negative`, () => {
            expect(GreaterThanMinimumParameter({maximum:-Infinity, minimum:-Infinity, inclusive:false, valid:false})).toBe('maximum "-Infinity" must greater than minimum "-Infinity".');
            expect(GreaterThanMinimumParameter({maximum:-Infinity, minimum:-Infinity, inclusive:false, valid:true})).toBe('maximum "-Infinity" is greater than minimum "-Infinity".');
        });

    });
});

describe(`nan`, () => {

    it(`inclusive`, () => {
        expect(GreaterThanMinimumParameter({maximum:NaN, minimum:NaN, inclusive:true, valid:false})).toBe('maximum "NaN" must greater or equal than minimum "NaN".');
        expect(GreaterThanMinimumParameter({maximum:NaN, minimum:NaN, inclusive:true, valid:true})).toBe('maximum "NaN" is greater or equal than minimum "NaN".');
    });

    it(`exclusive`, () => {
        expect(GreaterThanMinimumParameter({maximum:NaN, minimum:NaN, inclusive:false, valid:false})).toBe('maximum "NaN" must greater than minimum "NaN".');
        expect(GreaterThanMinimumParameter({maximum:NaN, minimum:NaN, inclusive:false, valid:true})).toBe('maximum "NaN" is greater than minimum "NaN".');
    });
});

