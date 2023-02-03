import Validator from '@alirya/validator/validator';
import IntegerValidatable from '../validatable/integer';
import Instance from '@alirya/validator/validatable/validatable';
import {ValidatableParameters} from '@alirya/validator/message/function/validatable';
import IntegerString from '../assert/string/integer';
import {ValidatableParameter} from '@alirya/validator/message/function/validatable';
import IntegerStringParameter from '../assert/string/integer';
import {NumberParameters} from './number';
import Chain from '../../../validator/dist/chain';

export function IntegerParameters() : Validator<number, number, boolean, boolean, string>;

export function IntegerParameters<MessageT>(
    message : ValidatableParameters<number, MessageT>
) : Validator<number, number, boolean, boolean, MessageT>;

export function IntegerParameters<MessageT>(
    message : ValidatableParameters<number, MessageT|string> = IntegerString.Parameters
) : Validator<number, number, boolean, boolean, MessageT|string> {

    return Chain(NumberParameters(), function (value) {

        return IntegerValidatable.Parameters(value, message);

    });

    // return function (value) {
    //
    //     return IntegerValidatable.Parameters(value, message);
    //
    // } as Validator<number, number, boolean, boolean, MessageT|string>;
}


export function IntegerParameter() : Validator<number, number, boolean, boolean, string>;

export function IntegerParameter<MessageT>(
    message : ValidatableParameter<number, MessageT>
) : Validator<number, number, boolean, boolean, MessageT>;

export function IntegerParameter<MessageT>(
    message : ValidatableParameter<number, MessageT|string> = IntegerStringParameter.Parameter
) : Validator<number, number, boolean, boolean, MessageT|string> {

    return IntegerParameters((value, valid) => message({value, valid}));
}


namespace Integer {
    export const Parameters = IntegerParameters;
    export const Parameter = IntegerParameter;
}
export default Integer;
