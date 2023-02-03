import Validator from '@alirya/validator/validator';
import InfiniteValidatable from '../validatable/infinite';
import Instance from '@alirya/validator/validatable/validatable';
import {ValidatableParameters} from '@alirya/validator/message/function/validatable';
import InfiniteString from '../assert/string/infinite';
import {ValidatableParameter} from '@alirya/validator/message/function/validatable';
import InfiniteStringParameter from '../assert/string/infinite';
import {NumberParameters} from './number';
import Chain from '../../../validator/dist/chain';

export function InfiniteParameters() : Validator<number, number, boolean, boolean, string>;

export function InfiniteParameters<MessageT>(
    message : ValidatableParameters<number, MessageT>
) : Validator<number, number, boolean, boolean, MessageT>;

export function InfiniteParameters<MessageT>(
    message : ValidatableParameters<number, MessageT|string> = InfiniteString.Parameters
) : Validator<number, number, boolean, boolean, MessageT|string> {

    return Chain(NumberParameters(), function (value) {

        return InfiniteValidatable.Parameters(value, message);

    });

    // return function (value) {
    //
    //     return InfiniteValidatable.Parameters(value, message);
    //
    // } as Validator<number, number, boolean, boolean, MessageT|string>;
}


export function InfiniteParameter() : Validator<number, number, boolean, boolean, string>;

export function InfiniteParameter<MessageT>(
    message : ValidatableParameter<number, MessageT>
) : Validator<number, number, boolean, boolean, MessageT>;

export function InfiniteParameter<MessageT>(
    message : ValidatableParameter<number, MessageT|string> = InfiniteStringParameter.Parameter
) : Validator<number, number, boolean, boolean, MessageT|string> {

    return InfiniteParameters((value, valid) => message({value, valid}));
}


namespace Infinite {
    export const Parameters = InfiniteParameters;
    export const Parameter = InfiniteParameter;
}
export default Infinite;
