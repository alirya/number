import Validator from '@alirya/validator/validator';
import GreaterValidatable, {GreaterContext} from '../validatable/greater';
import {ValidatableParameters} from '@alirya/validator/message/function/validatable';
import GreaterString from '../assert/string/greater';
import Validatable from '@alirya/validator/value/validatable';
import Message from '@alirya/message/message';
import Value from '@alirya/value/value';
import Inclusive from '../inclusive/inclusive';
import Minimum from '../minimum/minimum';
import {ValidatableParameter} from '@alirya/validator/message/function/validatable';
import StrictOmit from '@alirya/object/strict-omit';
import {NumberParameters} from './number';
import Chain from '../../../validator/dist/chain';

export type GreaterArgumentsMessage<MessageT> = ValidatableParameters<number, MessageT, [minimum:number, inclusive: boolean]>;

export function GreaterParameters(
    minimum : number,
    inclusive : boolean,
) : Validator<number, number, boolean, boolean, string, GreaterContext>;

export function GreaterParameters<MessageT>(
    minimum : number,
    inclusive : boolean,
    message : GreaterArgumentsMessage<MessageT>
) : Validator<number, number, boolean, boolean, MessageT, GreaterContext>;

export function GreaterParameters<MessageT>(
    minimum : number,
    inclusive : boolean,
    message : GreaterArgumentsMessage<MessageT|string> = GreaterString.Parameters
) : Validator<number, number, boolean, boolean, MessageT|string, GreaterContext> {


    return Chain(NumberParameters(), function (value) {

        return new GreaterValidatable.Parameters(value, minimum, inclusive, message);

    }) as Validator<number, number, boolean, boolean, MessageT|string, GreaterContext>;

    // return function (value) {
    //
    //     return new GreaterValidatable.Parameters(value, minimum, inclusive, message);
    //
    // } as Validator<number, number, boolean, boolean, MessageT|string>;

}

export type GreaterArgumentMessage<MessageT> = ValidatableParameter<number, MessageT, Inclusive & Minimum & Validatable<number>>;

export type GreaterArgument<MessageT> =
    Minimum &
    Inclusive &
    Partial<Message<GreaterArgumentMessage<MessageT>>>;

export function GreaterParameter<MessageT>(
    {
        minimum,
        inclusive,
        message,
    } : Required<GreaterArgument<MessageT>>
) : Validator<number, number, boolean, boolean, MessageT, GreaterContext>;

export function GreaterParameter(
    {
        minimum,
        inclusive,
    } : StrictOmit<GreaterArgument<string>, 'message'>
) : Validator<number, number, boolean, boolean, string, GreaterContext>;


export function GreaterParameter<MessageType>(
    {
        minimum,
        inclusive,
        message = GreaterString.Parameter,
    } : Minimum & Inclusive & Message<(result:Readonly<Value<number> & Inclusive & Minimum & Validatable>)=>MessageType|string>
) : Validator<number, number, boolean, boolean, MessageType|string, GreaterContext>  {

    return GreaterParameters(
        minimum,
        inclusive,
        (value, valid, minimum, inclusive) => message({value, valid, minimum, inclusive})
    );
}


namespace Greater {
    export const Parameters = GreaterParameters;
    export const Parameter = GreaterParameter;
    export type Argument<MessageT> = GreaterArgument<MessageT>;
    export type ArgumentsMessage<MessageT> = GreaterArgumentsMessage<MessageT>;
    export type ArgumentMessage<MessageT> = GreaterArgumentMessage<MessageT>;
}
export default Greater;
