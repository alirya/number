import Validator from '@alirya/validator/simple';
import NumericValidatable from '../validatable/numeric';
import Instance from '@alirya/validator/validatable/validatable';
import {ValidatableParameters} from '@alirya/validator/message/function/validatable';
import NumericString from '../assert/string/numeric';
import {ValidatableParameter} from '@alirya/validator/message/function/validatable';
import NumericStringParameter from '../assert/string/numeric';

export function NumericParameters() : Validator<unknown, string|number, Readonly<Instance<unknown, string>>>;

export function NumericParameters<MessageT>(
    message : ValidatableParameters<unknown, MessageT>
) : Validator<unknown, string|number, Readonly<Instance<unknown, MessageT>>>;

export function NumericParameters<MessageT>(
    message : ValidatableParameters<unknown, MessageT|string> = NumericString.Parameters
) : Validator<unknown, string|number, Readonly<Instance<unknown, MessageT>>> {

    return function<Type extends string|number, Argument extends unknown>(value : Type|Argument) {

        return  NumericValidatable.Parameters(value, message);

    } as Validator<unknown, string|number, Readonly<Instance<unknown, MessageT>>>;
}


export function NumericParameter() : Validator<unknown, string|number, Readonly<Instance<unknown, string>>>;

export function NumericParameter<MessageT>(
    message : ValidatableParameter<unknown, MessageT>
) : Validator<unknown, string|number, Readonly<Instance<unknown, MessageT>>>;

export function NumericParameter<MessageT>(
    message : ValidatableParameter<unknown, MessageT|string> = NumericStringParameter.Parameter
) : Validator<unknown, string|number, Readonly<Instance<unknown, MessageT|string>>> {

    return NumericParameters((value, valid) => message({value, valid}));
}


namespace Numeric {
    export const Parameters = NumericParameters;
    export const Parameter = NumericParameter;
}
export default Numeric;
