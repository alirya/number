import {LowerThanMaximumParameter} from '../../../dist/minimum/string/lower-than-maximum';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

describe(`integer`,function() {

    describe(`exclusive`,function() {

        it(`positive`, () => {
            expect(LowerThanMaximumParameter({maximum:1, minimum:1, inclusive:false, valid:false})).toBe('minimum "1" must lower than maximum "1".');
            expect(LowerThanMaximumParameter({maximum:1, minimum:10, inclusive:false, valid:true})).toBe('minimum "1" is lower than maximum "10".');
        });

        it(`negative`, () => {
            expect(LowerThanMaximumParameter({maximum:-1, minimum:-1, inclusive:false, valid:false})).toBe('minimum "-1" must lower than maximum "-1".');
            expect(LowerThanMaximumParameter({maximum:-1, minimum:-10, inclusive:false, valid:true})).toBe('minimum "-1" is lower than maximum "-10".');
        });

    });

    describe(`inclusive`,function() {

        it(`positive`, () => {
            expect(LowerThanMaximumParameter({maximum:1, minimum:1, inclusive:true, valid:false})).toBe('minimum "1" must lower or equal than maximum "1".');
            expect(LowerThanMaximumParameter({maximum:1, minimum:10, inclusive:true, valid:true})).toBe('minimum "1" is lower or equal than maximum "10".');
        });

        it(`negative`, () => {
            expect(LowerThanMaximumParameter({maximum:-1, minimum:-1, inclusive:true, valid:false})).toBe('minimum "-1" must lower or equal than maximum "-1".');
            expect(LowerThanMaximumParameter({maximum:-1, minimum:-10, inclusive:true, valid:true})).toBe('minimum "-1" is lower or equal than maximum "-10".');
        });

    });
});

describe(`float`,function() {

    describe(`inclusive`,function() {

        it(`positive`, () => {
            expect(LowerThanMaximumParameter({maximum:1.1, minimum:1.1, inclusive:true, valid:false})).toBe('minimum "1.1" must lower or equal than maximum "1.1".');
            expect(LowerThanMaximumParameter({maximum:1.1, minimum:10.1, inclusive:true, valid:true})).toBe('minimum "1.1" is lower or equal than maximum "10.1".');
        });

        it(`negative`, () => {
            expect(LowerThanMaximumParameter({maximum:-1.2, minimum:-1.1, inclusive:true, valid:false})).toBe('minimum "-1.2" must lower or equal than maximum "-1.1".');
            expect(LowerThanMaximumParameter({maximum:-1.2, minimum:-10.1, inclusive:true, valid:true})).toBe('minimum "-1.2" is lower or equal than maximum "-10.1".');
        });

    });

    describe(`exclusive`,function() {

        it(`positive`, () => {
            expect(LowerThanMaximumParameter({maximum:1.1, minimum:1.1, inclusive:false, valid:false})).toBe('minimum "1.1" must lower than maximum "1.1".');
            expect(LowerThanMaximumParameter({maximum:1.1, minimum:10.1, inclusive:false, valid:true})).toBe('minimum "1.1" is lower than maximum "10.1".');
        });

        it(`negative`, () => {
            expect(LowerThanMaximumParameter({maximum:-1.2, minimum:-1.1, inclusive:false, valid:false})).toBe('minimum "-1.2" must lower than maximum "-1.1".');
            expect(LowerThanMaximumParameter({maximum:-1.2, minimum:-10.1, inclusive:false, valid:true})).toBe('minimum "-1.2" is lower than maximum "-10.1".');
        });

    });
});

describe(`infinity`,function() {

    describe(`infinity`,function() {

        it(`inclusive`, () => {
            expect(LowerThanMaximumParameter({maximum:Infinity, minimum:Infinity, inclusive:true, valid:false})).toBe('minimum "Infinity" must lower or equal than maximum "Infinity".');
            expect(LowerThanMaximumParameter({maximum:Infinity, minimum:Infinity, inclusive:true, valid:true})).toBe('minimum "Infinity" is lower or equal than maximum "Infinity".');
        });

        it(`negative`, () => {
            expect(LowerThanMaximumParameter({maximum:-Infinity, minimum:-Infinity, inclusive:true, valid:false})).toBe('minimum "-Infinity" must lower or equal than maximum "-Infinity".');
            expect(LowerThanMaximumParameter({maximum:-Infinity, minimum:-Infinity, inclusive:true, valid:true})).toBe('minimum "-Infinity" is lower or equal than maximum "-Infinity".');
        });

    });

    describe(`exclusive`,function() {

        it(`positive`, () => {
            expect(LowerThanMaximumParameter({maximum:Infinity, minimum:Infinity, inclusive:false, valid:false})).toBe('minimum "Infinity" must lower than maximum "Infinity".');
            expect(LowerThanMaximumParameter({maximum:Infinity, minimum:Infinity, inclusive:false, valid:true})).toBe('minimum "Infinity" is lower than maximum "Infinity".');
        });

        it(`negative`, () => {
            expect(LowerThanMaximumParameter({maximum:-Infinity, minimum:-Infinity, inclusive:false, valid:false})).toBe('minimum "-Infinity" must lower than maximum "-Infinity".');
            expect(LowerThanMaximumParameter({maximum:-Infinity, minimum:-Infinity, inclusive:false, valid:true})).toBe('minimum "-Infinity" is lower than maximum "-Infinity".');
        });

    });
});

describe(`nan`, () => {

    it(`inclusive`, () => {
        expect(LowerThanMaximumParameter({maximum:NaN, minimum:NaN, inclusive:true, valid:false})).toBe('minimum "NaN" must lower or equal than maximum "NaN".');
        expect(LowerThanMaximumParameter({maximum:NaN, minimum:NaN, inclusive:true, valid:true})).toBe('minimum "NaN" is lower or equal than maximum "NaN".');
    });

    it(`exclusive`, () => {
        expect(LowerThanMaximumParameter({maximum:NaN, minimum:NaN, inclusive:false, valid:false})).toBe('minimum "NaN" must lower than maximum "NaN".');
        expect(LowerThanMaximumParameter({maximum:NaN, minimum:NaN, inclusive:false, valid:true})).toBe('minimum "NaN" is lower than maximum "NaN".');
    });
});

