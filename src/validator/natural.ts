import Validator from '@alirya/validator/validator.js';
import NaturalValidatable from '../validatable/natural.js';
import Instance from '@alirya/validator/validatable/validatable.js';
import {ValidatableParameters} from '@alirya/validator/message/function/validatable.js';
import NaturalString from '../assert/string/natural.js';
import {ValidatableParameter} from '@alirya/validator/message/function/validatable.js';

export function NaturalParameters() : Validator<number, number, boolean, boolean, Readonly<Instance<number, string>>>;

export function NaturalParameters<MessageT>(
    message : ValidatableParameters<number, MessageT>
) : Validator<number, number, boolean, boolean, Readonly<Instance<number, MessageT>>>;

export function NaturalParameters<MessageT>(
    message : ValidatableParameters<number, MessageT|string> = NaturalString.Parameters
) : Validator<number, number, boolean, boolean, Readonly<Instance<number, MessageT>>> {

    return function (value) {

        return NaturalValidatable.Parameters(value, message);
    } as Validator<number, number, boolean, boolean, Readonly<Instance<number, MessageT>>>;
}


export function NaturalParameter() : Validator<number, number, boolean, boolean, Readonly<Instance<number, string>>>;

export function NaturalParameter<MessageT>(
    message : ValidatableParameter<number, MessageT>
) : Validator<number, number, boolean, boolean, Readonly<Instance<number, MessageT>>>;

export function NaturalParameter<MessageT>(
    message : ValidatableParameter<number, MessageT|string> = NaturalString.Parameter
) : Validator<number, number, boolean, boolean, Readonly<Instance<number, MessageT|string>>> {

    return NaturalParameters((value, valid) => message({value, valid}));

}


namespace Natural {
    export const Parameters = NaturalParameters;
    export const Parameter = NaturalParameter;
}
export default Natural;
