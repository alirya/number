import Validator from '@alirya/validator/validator.js';
import LowerValidatable from '../validatable/lower.js';
import {ValidatableParameters} from '@alirya/validator/message/function/validatable.js';
import LowerString from '../assert/string/lower.js';
import Validatable from '@alirya/validator/value/validatable.js';
import Message from '@alirya/message/message.js';
import Inclusive from '../inclusive/inclusive.js';
import Maximum from '../maximum/maximum.js';
import {ValidatableParameter} from '@alirya/validator/message/function/validatable.js';
import StrictOmit from '@alirya/object/strict-omit.js';
import LowerStringParameter from '../assert/string/lower.js';

export function LowerParameters<MessageT> (
    maximum : number,
    inclusive : boolean,
) : Validator<number, number, boolean, boolean, LowerValidatable.Type<number, MessageT>>;

export function LowerParameters<MessageT> (
    maximum : number,
    inclusive : boolean,
    message : ValidatableParameters<number, MessageT, [maximum:number, inclusive: boolean]>
) : Validator<number, number, boolean, boolean, LowerValidatable.Type<number, MessageT>>;

export function LowerParameters<MessageT> (
    maximum : number,
    inclusive : boolean,
    message : ValidatableParameters<number, MessageT|string, [maximum:number, inclusive: boolean]> = LowerString.Parameters
) : Validator<number, number, boolean, boolean, LowerValidatable.Type<number, MessageT>> {

    return function (value) {

        return new LowerValidatable.Parameters(value, maximum, inclusive, message);

    } as Validator<number, number, boolean, boolean, LowerValidatable.Type<number, MessageT>>;
}


export type LowerArgument<MessageT> =
    Maximum &
    Inclusive &
    Partial<Message<ValidatableParameter<number, MessageT, Inclusive & Maximum & Validatable<number>>>>;

export function LowerParameter<MessageT>(
    {
        maximum,
        inclusive,
        message,
    } : Required<LowerArgument<MessageT>>
) : Validator<number, number, boolean, boolean, LowerValidatable.Type<number, MessageT>>;

export function LowerParameter<MessageT>(
    {
        maximum,
        inclusive,
    } : StrictOmit<LowerArgument<MessageT>, 'message'>
) : Validator<number, number, boolean, boolean, LowerValidatable.Type<number, MessageT>>;

export function LowerParameter<MessageT>(
    {
        maximum,
        inclusive,
        message = LowerStringParameter.Parameter,
    } : LowerArgument<MessageT|string>
) : Validator<number, number, boolean, boolean, LowerValidatable.Type<number, MessageT|string>> {

    return LowerParameters(
        maximum,
        inclusive,
        (value, valid, maximum, inclusive) => message({value, valid, maximum, inclusive}
    ));
}


namespace Lower {
    export const Parameters = LowerParameters;
    export const Parameter = LowerParameter;
}
export default Lower;
