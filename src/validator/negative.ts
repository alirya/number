import Validator from '@alirya/validator/validator.js';
import NegativeValidatable from '../validatable/negative.js';
import Instance from '@alirya/validator/validatable/validatable.js';
import {ValidatableParameters} from '@alirya/validator/message/function/validatable.js';
import NegativeString from '../assert/string/negative.js';
import {ValidatableParameter} from '@alirya/validator/message/function/validatable.js';
import PositiveString from '../assert/string/positive.js';

export function NegativeParameters() : Validator<number, number, boolean, boolean, Readonly<Instance<number, string>>>;

export function NegativeParameters<MessageT>(
    message : ValidatableParameters<number, MessageT>
) : Validator<number, number, boolean, boolean, Readonly<Instance<number, MessageT>>>;

export function NegativeParameters<MessageT>(
    message : ValidatableParameters<number, MessageT|string> = NegativeString.Parameters
) : Validator<number, number, boolean, boolean, Readonly<Instance<number, MessageT>>> {

    return function (value) {

        return NegativeValidatable.Parameters(value, message);

    } as Validator<number, number, boolean, boolean, Readonly<Instance<number, MessageT>>>;
}


export function NegativeParameter() : Validator<number, number, boolean, boolean, Readonly<Instance<number, string>>>;

export function NegativeParameter<MessageT>(
    message : ValidatableParameter<number, MessageT>
) : Validator<number, number, boolean, boolean, Readonly<Instance<number, MessageT>>>;

export function NegativeParameter<MessageT>(
    message : ValidatableParameter<number, MessageT|string> = PositiveString.Parameter
) : Validator<number, number, boolean, boolean, Readonly<Instance<number, MessageT|string>>> {

    return NegativeParameters((value, valid) => message({value, valid}));
}


namespace Negative {
    export const Parameters = NegativeParameters;
    export const Parameter = NegativeParameter;
}
export default Negative;
