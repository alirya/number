import Validator from '@alirya/validator/validator.js';
import GreaterThanMinimumValidatable from '../validatable/greater-than-minimum.js';
import {ValidatableParameters} from '@alirya/validator/message/function/validatable.js';
import {GreaterThanMinimumArgument} from '../validatable/greater-than-minimum.js';
import Validatable from '@alirya/validatable/validatable.js';
import Minimum from '../../minimum/minimum.js';
import Maximum from '../maximum.js';
import Inclusive from '../../inclusive/inclusive.js';

export function GreaterThanMinimumParameters<MessageT, Base extends GreaterThanMinimumArgument = GreaterThanMinimumArgument>(
    message : ValidatableParameters<number, MessageT, [minimum: number, inclusive:boolean]>
) : Validator<Base, Base, boolean, boolean, GreaterThanMinimumValidatable.Type<Base, MessageT>> {

    return function ({minimum, maximum, inclusive}) {

        return new GreaterThanMinimumValidatable.Parameters(minimum, maximum, inclusive, message);

    } as Validator<Base, Base, boolean, boolean, GreaterThanMinimumValidatable.Type<Base, MessageT>>;
}


export function GreaterThanMinimumParameter<MessageT, Base extends GreaterThanMinimumArgument>(
    message : (result:Readonly<Maximum & Inclusive & Minimum & Validatable>)=>MessageT
) : Validator<Base, Base, boolean, boolean, GreaterThanMinimumValidatable.Type<Base, MessageT>> {

    return function (value) {

        return new GreaterThanMinimumValidatable.Parameter(value, message);

    } as Validator<Base, Base, boolean, boolean, GreaterThanMinimumValidatable.Type<Base, MessageT>>;
}


namespace GreaterThanMinimum {
    export const Parameters = GreaterThanMinimumParameters;
    export const Parameter = GreaterThanMinimumParameter;
}
export default GreaterThanMinimum;
