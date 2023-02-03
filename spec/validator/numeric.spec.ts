// import {NumericParameters} from '../../dist/validator/numeric';
// import NumericMessage from '../../dist/assert/string/numeric';
//
// it('enable console log', () => { spyOn(console, 'log').and.callThrough();});
//
// describe(`compiler compatible`,function() {
//
//     it(`valid value`,function() {
//
//         let validator = NumericParameters(NumericMessage.Parameters);
//         let validatable = validator(<unknown>10);
//
//         if(validatable.valid) {
//
//             // compiler pass
//             let number : number|string = validatable.value;
//             expect(number).toBe(10);
//
//         } else {
//
//             // @ts-expect-error
//             let number : number|string = validatable.value;
//             fail('validatable.valid should false');
//         }
//     });
//
//     it(`invalid value`,function() {
//
//         let validator = NumericParameters(NumericMessage.Parameters);
//         let validatable = validator({});
//
//         if(validatable.valid) {
//
//             // compiler pass
//             let number : number|string = validatable.value;
//             fail('validatable.valid should false');
//
//         } else {
//
//             // @ts-expect-error
//             let number : number|string = validatable.value;
//             // @ts-expect-error
//             expect(number).toEqual({});
//         }
//     });
//
//     it(`readonly`,function() {
//
//         let validator = NumericParameters(NumericMessage.Parameters);
//         let validatable = validator(1);
//
//         try {
//             // @ts-expect-error
//             validatable.valid = true;
//             fail('exception should thrown');
//         } catch (e) {
//             expect(e).toBeInstanceOf(Error);
//         }
//
//         // @ts-expect-error
//         validatable.value = true;
//
//         try {
//             // @ts-expect-error
//             validatable.message = 'message';
//             fail('exception should thrown');
//         } catch (e) {
//             expect(e).toBeInstanceOf(Error);
//         }
//
//     });
// });
//
//
// it(`valid number`,function() {
//
//     let validator = NumericParameters(NumericMessage.Parameters);
//     let validatable = validator(1);
//
//     expect(validatable.valid).toBe(true);
//     expect(validatable.value).toBe(1);
//     expect(typeof validatable.message).toBe('string');
//
// });
//
// it(`valid string`,function() {
//
//     let validator = NumericParameters(NumericMessage.Parameters);
//     let validatable = validator('-1.1');
//
//     expect(validatable.valid).toBe(true);
//     expect(validatable.value).toBe('-1.1');
//     expect(typeof validatable.message).toBe('string');
//
// });
//
// it(`invalid`,function() {
//
//     let validator = NumericParameters(NumericMessage.Parameters);
//     let validatable = validator('a');
//
//     expect<boolean>(validatable.valid).toBe(false);
//     expect(validatable.value).toBe('a');
//     expect(typeof validatable.message).toBe('string');
//
// });
//
//
//
