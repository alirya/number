import Validator from '@alirya/validator/validator';
import NegativeValidatable from '../validatable/negative';
import Instance from '@alirya/validator/validatable/validatable';
import {ValidatableParameters} from '@alirya/validator/message/function/validatable';
import NegativeString from '../assert/string/negative';
import {ValidatableParameter} from '@alirya/validator/message/function/validatable';
import PositiveString from '../assert/string/positive';

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
