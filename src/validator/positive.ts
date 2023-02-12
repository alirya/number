import Validator from '@alirya/validator/validator.js';
import PositiveValidatable from '../validatable/positive.js';
import Instance from '@alirya/validator/validatable/validatable.js';
import {ValidatableParameters} from '@alirya/validator/message/function/validatable.js';
import PositiveString from '../assert/string/positive.js';
import {ValidatableParameter} from '@alirya/validator/message/function/validatable.js';
import PositiveStringParameter from '../assert/string/positive.js';
import Chain from '../../../validator/dist/chain.js';
import {NumberParameters} from './number.js';

export function PositiveParameters() : Validator<number, number, boolean, boolean, string>;

export function PositiveParameters<MessageT>(
    message : ValidatableParameters<number, MessageT>
) : Validator<number, number, boolean, boolean, MessageT>;

export function PositiveParameters<MessageT>(
    message : ValidatableParameters<number, MessageT|string> = PositiveString.Parameters
) : Validator<number, number, boolean, boolean, MessageT> {

    return Chain(NumberParameters(), function <Argument extends number>(value: Argument) {

        return PositiveValidatable.Parameters(value, message);

    }) as Validator<number, number, boolean, boolean, MessageT>;

    // return function <Argument extends number>(value: Argument) {
    //
    //     return PositiveValidatable.Parameters(value, message);
    //
    // } as Validator<number, number, boolean, boolean, MessageT>;
}


export function PositiveParameter() : Validator<number, number, boolean, boolean, string>;

export function PositiveParameter<MessageT>(
    message : ValidatableParameter<number, MessageT>
) : Validator<number, number, boolean, boolean, MessageT>;

export function PositiveParameter<MessageT>(
    message : ValidatableParameter<number, MessageT|string> = PositiveStringParameter.Parameter
) : Validator<number, number, boolean, boolean, MessageT|string> {

    return PositiveParameters((value, valid) => message({value, valid}));
}


namespace Positive {
    export const Parameters = PositiveParameters;
    export const Parameter = PositiveParameter;
}
export default Positive;
