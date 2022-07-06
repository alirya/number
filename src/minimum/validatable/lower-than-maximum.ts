import {ValidatableParameters} from '@alirya/validator/message/function/validatable.js';
import Minimum from '../../minimum/minimum.js';
import Value from '@alirya/value/value.js';
import Validatable from '@alirya/validatable/validatable.js';
import Message from '@alirya/message/message.js';
import {ReadonlyWrapperParameters, ReadonlyWrapperType} from '@alirya/validator/validatable/readonly-wrapper.js';
import {CallbackParameters} from '@alirya/validator/validatable/callback.js';
import Inclusive from '../../inclusive/inclusive.js';
import Maximum from '../../maximum/maximum.js';
import LowerThanMinimumFunctionParameter from '../boolean/lower-than-maximum.js';
import {ValidatableParameter} from '@alirya/validator/message/function/validatable.js';
import DynamicValue from '@alirya/validator/value/validatable.js';

export type LowerThanMaximumArgument = Minimum & Maximum & Inclusive;
export type LowerThanMaximumArgumentMessage<Type extends LowerThanMaximumArgument, MessageT> =
    ValidatableParameter<Type, MessageT, LowerThanMaximumArgument & DynamicValue<Type>>;

export interface LowerThanMaximumType<MessageT, ValueT extends LowerThanMaximumArgument>
    extends
        ReadonlyWrapperType<Value<ValueT>, Message<MessageT>, Validatable>,
        Readonly<Inclusive>,
        Readonly<Minimum>,
        Readonly<Maximum>
{}

export class LowerThanMaximumParameter<MessageT, ValueT extends LowerThanMaximumArgument>
    extends ReadonlyWrapperParameters<Value<ValueT>, Message<MessageT>, Validatable>
    implements LowerThanMaximumType<MessageT, ValueT>
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
