import {ValidatableParameters} from '@alirya/validator/message/function/validatable';
import Minimum from '../../minimum/minimum';
import Value from '@alirya/value/value';
import Validatable from '@alirya/validatable/validatable';
import ValidatorValidatable from '@alirya/validator/validatable/validatable';
import Message from '@alirya/message/message';
import {ReadonlyWrapperParameters, ReadonlyWrapperType} from '@alirya/validator/validatable/readonly-wrapper';
import {CallbackParameters} from '@alirya/validator/validatable/callback';
import Inclusive from '../../inclusive/inclusive';
import Maximum from '../../maximum/maximum';
import LowerThanMinimumFunctionParameter from '../boolean/lower-than-maximum';
import {ValidatableParameter} from '@alirya/validator/message/function/validatable';
import DynamicValue from '@alirya/validator/value/validatable';

export type LowerThanMaximumArgument = Minimum & Maximum & Inclusive;
export type LowerThanMaximumArgumentMessage<Type extends LowerThanMaximumArgument, MessageT> =
    ValidatableParameter<Type, MessageT, LowerThanMaximumArgument & DynamicValue<Type>>;

export interface LowerThanMaximumContext/*<MessageT, ValueT extends LowerThanMaximumArgument>*/
    extends
        // ReadonlyWrapperType<Value<ValueT>, Message<MessageT>, Validatable>,
        Readonly<Inclusive>,
        Readonly<Minimum>,
        Readonly<Maximum>
{}

export class LowerThanMaximumParameter<MessageT, ValueT extends LowerThanMaximumArgument>
    extends ReadonlyWrapperParameters<Value<ValueT>, Message<MessageT>, Validatable>
    implements LowerThanMaximumContext/*<MessageT, ValueT>*/ , ValidatorValidatable<ValueT, MessageT>
{
    readonly minimum : number;
    readonly maximum : number;
    readonly inclusive : boolean;

    constructor(
        argument : ValueT,
        message : LowerThanMaximumArgumentMessage<ValueT, MessageT>
    );
    constructor(
        argument : ValueT & Message<LowerThanMaximumArgumentMessage<ValueT, MessageT>>,
    )
    constructor(
        argument : ValueT & Message<LowerThanMaximumArgumentMessage<ValueT, MessageT>>,
        message ?: LowerThanMaximumArgumentMessage<ValueT, MessageT>
    ) {

        let msg = CallbackParameters(argument, LowerThanMinimumFunctionParameter.Parameter, ()=>(message || argument.message)(this));

        super({value : argument}, msg, msg);

        this.minimum = argument.minimum;
        this.maximum = argument.maximum;
        this.inclusive = argument.inclusive;

    }
}


export class LowerThanMaximumParameters<MessageT>
    extends LowerThanMaximumParameter<MessageT, LowerThanMaximumArgument>
{

    constructor(
        minimum : number,
        maximum : number,
        inclusive : boolean,
        message : ValidatableParameters<number, MessageT, [maximum:number, inclusive:boolean]>
    ) {

        super({
            minimum,
            maximum,
            inclusive,
            message :({minimum, valid, maximum, inclusive}) => {

                return message(minimum, valid, maximum, inclusive);
            }
        });

    }
}

namespace LowerThanMaximum {
    export const Parameters = LowerThanMaximumParameters;
    export const Parameter = LowerThanMaximumParameter;
    export type Argument = LowerThanMaximumArgument;
    export type ArgumentMessage<Type extends LowerThanMaximumArgument, MessageT>
        = LowerThanMaximumArgumentMessage<Type, MessageT> ;
}
export default LowerThanMaximum;
