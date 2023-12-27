import Validator from '@axiona/validator/validator.js';
import NegativeValidatable from '../validatable/negative.js';
import Instance from '@axiona/validator/validatable/validatable.js';
import {ValidatableParameters} from '@axiona/validator/message/function/validatable.js';
import NegativeString from '../assert/string/negative.js';
import {ValidatableParameter} from '@axiona/validator/message/function/validatable.js';
import PositiveString from '../assert/string/positive.js';
import Chain from '@axiona/validator/chain.js';
import {NumberParameters} from './number.js';

export function NegativeParameters() : Validator<number, number, boolean, boolean, string>;

export function NegativeParameters<MessageT>(
    message : ValidatableParameters<number, MessageT>
) : Validator<number, number, boolean, boolean, MessageT>;

export function NegativeParameters<MessageT>(
    message : ValidatableParameters<number, MessageT|string> = NegativeString.Parameters
) : Validator<number, number, boolean, boolean, MessageT|string> {

    return Chain(NumberParameters(), function (value) {

        return NegativeValidatable.Parameters(value, message);

    });

    // return function (value) {
    //
    //     return NegativeValidatable.Parameters(value, message);
    //
    // } as Validator<number, number, boolean, boolean, MessageT|string>;
}


export function NegativeParameter() : Validator<number, number, boolean, boolean, string>;

export function NegativeParameter<MessageT>(
    message : ValidatableParameter<number, MessageT>
) : Validator<number, number, boolean, boolean, MessageT>;

export function NegativeParameter<MessageT>(
    message : ValidatableParameter<number, MessageT|string> = PositiveString.Parameter
) : Validator<number, number, boolean, boolean, MessageT|string> {

    return NegativeParameters((value, valid) => message({value, valid}));
}


namespace Negative {
    export const Parameters = NegativeParameters;
    export const Parameter = NegativeParameter;
}
export default Negative;
