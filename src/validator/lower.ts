import Validator from '@alirya/validator/validator';
import LowerValidatable from '../validatable/lower';
import {ValidatableParameters} from '@alirya/validator/message/function/validatable';
import LowerString from '../assert/string/lower';
import Validatable from '@alirya/validator/value/validatable';
import Message from '@alirya/message/message';
import Inclusive from '../inclusive/inclusive';
import Maximum from '../maximum/maximum';
import {ValidatableParameter} from '@alirya/validator/message/function/validatable';
import StrictOmit from '@alirya/object/strict-omit';
import LowerStringParameter from '../assert/string/lower';

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
