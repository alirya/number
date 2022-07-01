import Validator from '@alirya/validator/validator';
import Minimum from '../../minimum/minimum';
import Maximum from '../../maximum/maximum';
import Inclusive from '../../inclusive/inclusive';
import {ValidatableParameters} from '@alirya/validator/message/function/validatable';
import Validatable from '@alirya/validatable/validatable';
import GreaterThanMinimumValidatable, {LowerThanMaximumArgument, LowerThanMaximumType} from '../validatable/lower-than-maximum';

export function LowerThanMaximumParameters<Base extends Minimum & Maximum & Inclusive, MessageT>(
    message : ValidatableParameters<number, MessageT, [maximum:number, inclusive:boolean]>
) : Validator<LowerThanMaximumArgument, LowerThanMaximumArgument, boolean, boolean, LowerThanMaximumType<MessageT, LowerThanMaximumArgument>> {

    return function ({minimum, maximum, inclusive}) {

        return new GreaterThanMinimumValidatable.Parameters(minimum, maximum, inclusive, message);

    } as Validator<LowerThanMaximumArgument, LowerThanMaximumArgument, boolean, boolean, LowerThanMaximumType<MessageT, LowerThanMaximumArgument>>;
}


export function LowerThanMaximumParameter<Base extends LowerThanMaximumArgument, MessageT>(
    message : (result:Readonly<LowerThanMaximumArgument & Validatable>)=>MessageT
) : Validator<Base, Base, boolean, boolean, LowerThanMaximumType<MessageT, Base>> {

    return function (value) {

        return new GreaterThanMinimumValidatable.Parameter(value, message);

    } as Validator<Base, Base, boolean, boolean, LowerThanMaximumType<MessageT, Base>>;
}


namespace LowerThanMaximum {
    export const Parameters = LowerThanMaximumParameters;
    export const Parameter = LowerThanMaximumParameter;
}
export default LowerThanMaximum;
