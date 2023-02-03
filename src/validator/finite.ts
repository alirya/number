import Validator from '@alirya/validator/validator';
import FiniteValidatable from '../validatable/finite';
import Instance from '@alirya/validator/validatable/validatable';
import FiniteString from '../assert/string/finite';
import {ValidatableParameters, ValidatableParameter} from '@alirya/validator/message/function/validatable';
import {NumberParameters} from './number';
import Chain from '../../../validator/dist/chain';

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
