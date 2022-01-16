import Minimum from '../../minimum/minimum';
import Value from '@alirya/value/value';
import Validatable from '@alirya/validatable/validatable';
import Message from '@alirya/message/message';
import MergeWrapper from '@alirya/validator/validatable/readonly-wrapper-parameters';
import MessageCallback from '@alirya/validator/validatable/callback-function-parameters';
import Inclusive from '../../inclusive/inclusive';
import Maximum from '../maximum';
import GreaterThanMinimumFunction from '../boolean/greater-than-minimum-parameter';
import {
    LowerThanMaximumArgument as GreaterThanMinimumArgument,
    LowerThanMaximumArgumentMessage as GreaterThanMinimumArgumentMessage
} from '../../minimum/validatable/lower-than-maximum-parameter';

export {GreaterThanMinimumArgument, GreaterThanMinimumArgumentMessage};

export default class GreaterThanMinimumParameter<MessageT, ValueT extends GreaterThanMinimumArgument>
    extends MergeWrapper<Value<ValueT>, Message<MessageT>, Validatable>
    implements
        Readonly<Inclusive>,
        Readonly<Minimum>,
        Readonly<Maximum>
{
    readonly minimum : number;
    readonly maximum : number;
    readonly inclusive : boolean;

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

        let msg = MessageCallback(argument, GreaterThanMinimumFunction, ()=>(message || argument.message)(this));

        super({value : argument}, msg, msg);

        this.minimum = argument.minimum;
        this.maximum = argument.maximum;
        this.inclusive = argument.inclusive;
    }
}
