import Validator from '@alirya/validator/validator';
import PositiveValidatable from '../validatable/positive';
import Instance from '@alirya/validator/validatable/validatable';
import {ValidatableParameters} from '@alirya/validator/message/function/validatable';
import PositiveString from '../assert/string/positive';
import {ValidatableParameter} from '@alirya/validator/message/function/validatable';
import PositiveStringParameter from '../assert/string/positive';

export function PositiveParameters() : Validator<number, number, boolean, boolean, Readonly<Instance<number, string>>>;

export function PositiveParameters<MessageT>(
    message : ValidatableParameters<number, MessageT>
) : Validator<number, number, boolean, boolean, Readonly<Instance<number, MessageT>>>;

export function PositiveParameters<MessageT>(
    message : ValidatableParameters<number, MessageT|string> = PositiveString.Parameters
) : Validator<number, number, boolean, boolean, Readonly<Instance<number, MessageT>>> {

    return function <Argument extends number>(value: Argument) {

        return PositiveValidatable.Parameters(value, message);

    } as Validator<number, number, boolean, boolean, Readonly<Instance<number, MessageT>>>;
}


export function PositiveParameter() : Validator<number, number, boolean, boolean, Readonly<Instance<number, string>>>;

export function PositiveParameter<MessageT>(
    message : ValidatableParameter<number, MessageT>
) : Validator<number, number, boolean, boolean, Readonly<Instance<number, MessageT>>>;

export function PositiveParameter<MessageT>(
    message : ValidatableParameter<number, MessageT|string> = PositiveStringParameter.Parameter
) : Validator<number, number, boolean, boolean, Readonly<Instance<number, MessageT|string>>> {

    return PositiveParameters((value, valid) => message({value, valid}));
}


namespace Positive {
    export const Parameters = PositiveParameters;
    export const Parameter = PositiveParameter;
}
export default Positive;
