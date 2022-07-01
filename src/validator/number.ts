import Validator from '@alirya/validator/simple';
import NumberValidatable from '../validatable/number';
import Instance from '@alirya/validator/validatable/validatable';
import {ValidatableParameters} from '@alirya/validator/message/function/validatable';
import NumberString from '../assert/string/number';
import {ValidatableParameter} from '@alirya/validator/message/function/validatable';
import NumberStringParameter from '../assert/string/number';

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
