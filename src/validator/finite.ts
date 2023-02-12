import Validator from '@alirya/validator/validator.js';
import FiniteValidatable from '../validatable/finite.js';
import Instance from '@alirya/validator/validatable/validatable.js';
import FiniteString from '../assert/string/finite.js';
import {ValidatableParameters, ValidatableParameter} from '@alirya/validator/message/function/validatable.js';
import {NumberParameters} from './number.js';
import Chain from '../../../validator/dist/chain.js';

export function FiniteParameters() : Validator<number, number, boolean, boolean, string>;

export function FiniteParameters<MessageType>(
    message : ValidatableParameters<number, MessageType>
) : Validator<number, number, boolean, boolean, MessageType>;

export function FiniteParameters<MessageType>(
    message : ValidatableParameters<number, MessageType|string> = FiniteString.Parameters
) : Validator<number, number, boolean, boolean, MessageType|string> {

    return Chain(NumberParameters(), function (value) {

        return FiniteValidatable.Parameters(value, message);
    });
    //
    // return function (value) {
    //
    //     return FiniteValidatable.Parameters(value, message);
    //
    // } as Validator<number, number, boolean, boolean, MessageType|string>;
}


export function FiniteParameter()
    : Validator<number, number, boolean, boolean, string>;

export function FiniteParameter<MessageType>(
    message : ValidatableParameter<number, MessageType>
) : Validator<number, number, boolean, boolean, MessageType>;

export function FiniteParameter<MessageType>(
    message : ValidatableParameter<number, MessageType|string> = FiniteString.Parameter
) : Validator<number, number, boolean, boolean, MessageType|string> {

    return FiniteParameters((value, valid) => message({value, valid}));
}


namespace Finite {
    export const Parameters = FiniteParameters;
    export const Parameter = FiniteParameter;
}
export default Finite;
