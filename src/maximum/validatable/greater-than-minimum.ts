import {ValidatableParameters} from '@axiona/validator/message/function/validatable.js';
import Minimum from '../../minimum/minimum.js';
import Value from '@axiona/value/value.js';
import Validatable from '@axiona/validatable/validatable.js';
import ValidatorValidatable from '@axiona/validator/validatable/validatable.js';
import Message from '@axiona/message/message.js';
import {ReadonlyWrapperParameters, ReadonlyWrapperType} from '@axiona/validator/validatable/readonly-wrapper.js';
import MessageCallback from '@axiona/validator/validatable/callback.js';
import Inclusive from '../../inclusive/inclusive.js';
import Maximum from '../maximum.js';
import GreaterThanMinimumFunction from '../boolean/greater-than-minimum.js';
import {
    LowerThanMaximumArgument as GreaterThanMinimumArgument,
    LowerThanMaximumArgumentMessage as GreaterThanMinimumArgumentMessage
} from '../../minimum/validatable/lower-than-maximum.js';

export {GreaterThanMinimumArgument, GreaterThanMinimumArgumentMessage};

export interface GreaterThanMinimumContext/*<ValueT extends GreaterThanMinimumArgument, MessageT>*/ extends
    // ReadonlyWrapperType<Value<ValueT>, Message<MessageT>, Validatable>,
    Readonly<Inclusive>,
    Readonly<Minimum>,
    Readonly<Maximum> {

}

export class GreaterThanMinimumParameter<MessageT, ValueT extends GreaterThanMinimumArgument>
    extends ReadonlyWrapperParameters<Value<ValueT>, Message<MessageT>, Validatable>
    implements ValidatorValidatable<ValueT, MessageT>,
        GreaterThanMinimumContext/*<ValueT, MessageT>*/
{
    readonly minimum : number;
    readonly maximum : number;
    readonly inclusive : boolean;

    // TODO MERGE ARG?
    constructor(
        argument : ValueT,
        message : GreaterThanMinimumArgumentMessage<ValueT, MessageT>
    );
    constructor(
        argument : ValueT & Message<GreaterThanMinimumArgumentMessage<ValueT, MessageT>>,
    )
    constructor(
        argument : ValueT & Message<GreaterThanMinimumArgumentMessage<ValueT, MessageT>>,
        message ?: GreaterThanMinimumArgumentMessage<ValueT, MessageT>
    ) {

        const msg = MessageCallback.Parameters(argument, GreaterThanMinimumFunction.Parameter, ()=>(message || argument.message)(this));

        super({value : argument}, msg, msg);

        this.minimum = argument.minimum;
        this.maximum = argument.maximum;
        this.inclusive = argument.inclusive;
    }
}


export class GreaterThanMinimumParameters<MessageT>
    extends GreaterThanMinimumParameter<MessageT, GreaterThanMinimumArgument>
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

namespace GreaterThanMinimum {
    export const Parameters = GreaterThanMinimumParameters;
    export const Parameter = GreaterThanMinimumParameter;
    export type Argument = GreaterThanMinimumArgument;
    export type ArgumentMessage<Type extends GreaterThanMinimumArgument, MessageT> = GreaterThanMinimumArgumentMessage<Type, MessageT>;
    export type Context/*<ValueT extends GreaterThanMinimumArgument, MessageT>*/ = GreaterThanMinimumContext/*<ValueT, MessageT>*/;
}
export default GreaterThanMinimum;
