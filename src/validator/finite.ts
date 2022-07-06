import Validator from '@alirya/validator/validator.js';
import FiniteValidatable from '../validatable/finite.js';
import Instance from '@alirya/validator/validatable/validatable.js';
import FiniteString from '../assert/string/finite.js';
import {ValidatableParameters, ValidatableParameter} from '@alirya/validator/message/function/validatable.js';

export function FiniteParameters() : Validator<number, number, boolean, boolean, Readonly<Instance<number, string>>>;

export function FiniteParameters<MessageType>(
    message : ValidatableParameters<number, MessageType>
) : Validator<number, number, boolean, boolean, Readonly<Instance<number, MessageType>>>;

export function FiniteParameters<MessageType>(
    message : ValidatableParameters<number, MessageType|string> = FiniteString.Parameters
) : Validator<number, number, boolean, boolean, Readonly<Instance<number, MessageType|string>>> {

    return function (value) {

        return FiniteValidatable.Parameters(value, message);

    } as Validator<number, number, boolean, boolean, Readonly<Instance<number, MessageType|string>>>;
}


export function FiniteParameter()
    : Validator<number, number, boolean, boolean, Readonly<Instance<number, string>>>;

export function FiniteParameter<MessageType>(
    message : ValidatableParameter<number, MessageType>
) : Validator<number, number, boolean, boolean, Readonly<Instance<number, MessageType>>>;

export function FiniteParameter<MessageType>(
    message : ValidatableParameter<number, MessageType|string> = FiniteString.Parameter
) : Validator<number, number, boolean, boolean, Readonly<Instance<number, MessageType|string>>> {

    return FiniteParameters((value, valid) => message({value, valid}));
}


namespace Finite {
    export const Parameters = FiniteParameters;
    export const Parameter = FiniteParameter;
}
export default Finite;
