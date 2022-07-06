import Validator from '@alirya/validator/validator.js';
import IntegerValidatable from '../validatable/integer.js';
import Instance from '@alirya/validator/validatable/validatable.js';
import {ValidatableParameters} from '@alirya/validator/message/function/validatable.js';
import IntegerString from '../assert/string/integer.js';
import {ValidatableParameter} from '@alirya/validator/message/function/validatable.js';
import IntegerStringParameter from '../assert/string/integer.js';

export function IntegerParameters() : Validator<number, number, boolean, boolean, Readonly<Instance<number, string>>>;

export function IntegerParameters<MessageT>(
    message : ValidatableParameters<number, MessageT>
) : Validator<number, number, boolean, boolean, Readonly<Instance<number, MessageT>>>;

export function IntegerParameters<MessageT>(
    message : ValidatableParameters<number, MessageT|string> = IntegerString.Parameters
) : Validator<number, number, boolean, boolean, Readonly<Instance<number, MessageT>>> {

    return function (value) {

        return IntegerValidatable.Parameters(value, message);

    } as Validator<number, number, boolean, boolean, Readonly<Instance<number, MessageT>>>;
}


export function IntegerParameter() : Validator<number, number, boolean, boolean, Readonly<Instance<number, string>>>;

export function IntegerParameter<MessageT>(
    message : ValidatableParameter<number, MessageT>
) : Validator<number, number, boolean, boolean, Readonly<Instance<number, MessageT>>>;

export function IntegerParameter<MessageT>(
    message : ValidatableParameter<number, MessageT|string> = IntegerStringParameter.Parameter
) : Validator<number, number, boolean, boolean, Readonly<Instance<number, MessageT|string>>> {

    return IntegerParameters((value, valid) => message({value, valid}));
}


namespace Integer {
    export const Parameters = IntegerParameters;
    export const Parameter = IntegerParameter;
}
export default Integer;
