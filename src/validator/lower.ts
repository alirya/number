import Validator from '@axiona/validator/validator.js';
import LowerValidatable, {LowerContext} from '../validatable/lower.js';
import {ValidatableParameters} from '@axiona/validator/message/function/validatable.js';
import LowerString from '../assert/string/lower.js';
import Validatable from '@axiona/validator/value/validatable.js';
import Message from '@axiona/message/message.js';
import Inclusive from '../inclusive/inclusive.js';
import Maximum from '../maximum/maximum.js';
import {ValidatableParameter} from '@axiona/validator/message/function/validatable.js';
import StrictOmit from '@axiona/object/strict-omit.js';
import LowerStringParameter from '../assert/string/lower.js';
import {NumberParameters} from './number.js';
import Chain from '@axiona/validator/chain.js';

export function LowerParameters (
    maximum : number,
    inclusive : boolean,
) : Validator<number, number, boolean, boolean, string, LowerContext>;

export function LowerParameters<MessageT> (
    maximum : number,
    inclusive : boolean,
    message : ValidatableParameters<number, MessageT, [maximum:number, inclusive: boolean]>
) : Validator<number, number, boolean, boolean, MessageT, LowerContext>;

export function LowerParameters<MessageT> (
    maximum : number,
    inclusive : boolean,
    message : ValidatableParameters<number, MessageT|string, [maximum:number, inclusive: boolean]> = LowerString.Parameters
) : Validator<number, number, boolean, boolean, MessageT|string, LowerContext> {

    return Chain(NumberParameters(), function (value) {

        return new LowerValidatable.Parameters(value, maximum, inclusive, message);

    }) as Validator<number, number, boolean, boolean, MessageT|string, LowerContext>;

    // return function (value) {
    //
    //     return new LowerValidatable.Parameters(value, maximum, inclusive, message);
    //
    // } as Validator<number, number, boolean, boolean, MessageT|string>;
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
) : Validator<number, number, boolean, boolean, MessageT, LowerContext>;

export function LowerParameter<MessageT>(
    {
        maximum,
        inclusive,
    } : StrictOmit<LowerArgument<MessageT>, 'message'>
) : Validator<number, number, boolean, boolean, MessageT, LowerContext>;

export function LowerParameter<MessageT>(
    {
        maximum,
        inclusive,
        message = LowerStringParameter.Parameter,
    } : LowerArgument<MessageT|string>
) : Validator<number, number, boolean, boolean, MessageT|string, LowerContext> {

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
