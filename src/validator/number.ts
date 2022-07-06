import Validator from '@alirya/validator/simple.js';
import NumberValidatable from '../validatable/number.js';
import Instance from '@alirya/validator/validatable/validatable.js';
import {ValidatableParameters} from '@alirya/validator/message/function/validatable.js';
import NumberString from '../assert/string/number.js';
import {ValidatableParameter} from '@alirya/validator/message/function/validatable.js';
import NumberStringParameter from '../assert/string/number.js';

export function NumberParameters() : Validator<unknown, number, Readonly<Instance<unknown, string>>>;

export function NumberParameters<MessageT>(
    message : ValidatableParameters<unknown, MessageT>
) : Validator<unknown, number, Readonly<Instance<unknown, MessageT>>>;

export function NumberParameters<MessageT>(
    message : ValidatableParameters<unknown, MessageT|string> = NumberString.Parameters
) : Validator<unknown, number, Readonly<Instance<unknown, MessageT>>> {

    return function<Type extends number, Argument extends unknown>(value : Type|Argument) {

        return  NumberValidatable.Parameters(value, message);

    } as Validator<unknown, number, Readonly<Instance<unknown, MessageT>>>;
}


export function NumberParameter() : Validator<unknown, number, Readonly<Instance<unknown, string>>>;

export function NumberParameter<MessageT>(
    message : ValidatableParameter<unknown, MessageT>
) : Validator<unknown, number, Readonly<Instance<unknown, MessageT>>>;

export function NumberParameter<MessageT>(
    message : ValidatableParameter<unknown, MessageT|string> = NumberStringParameter.Parameter
) : Validator<unknown, number, Readonly<Instance<unknown, MessageT|string>>> {

    return NumberParameters((value, valid) => message({value, valid}));
}


namespace Number {
    export const Parameters = NumberParameters;
    export const Parameter = NumberParameter;
}
export default Number;
