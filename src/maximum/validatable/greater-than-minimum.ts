import {ValidatableParameters} from '@alirya/validator/message/function/validatable';
import Minimum from '../../minimum/minimum';
import Value from '@alirya/value/value';
import Validatable from '@alirya/validatable/validatable';
import ValidatorValidatable from '@alirya/validator/validatable/validatable';
import Message from '@alirya/message/message';
import {ReadonlyWrapperParameters, ReadonlyWrapperType} from '@alirya/validator/validatable/readonly-wrapper';
import MessageCallback from '@alirya/validator/validatable/callback';
import Inclusive from '../../inclusive/inclusive';
import Maximum from '../maximum';
import GreaterThanMinimumFunction from '../boolean/greater-than-minimum';
import {
    LowerThanMaximumArgument as GreaterThanMinimumArgument,
    LowerThanMaximumArgumentMessage as GreaterThanMinimumArgumentMessage
} from '../../minimum/validatable/lower-than-maximum';

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

        let msg = MessageCallback.Parameters(argument, GreaterThanMinimumFunction.Parameter, ()=>(message || argument.message)(this));

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
