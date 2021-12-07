import Minimum from "../../minimum/minimum";
import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import MergeWrapper from "@dikac/t-validator/validatable/readonly-wrapper-parameters";
import MessageCallback from "@dikac/t-validator/validatable/callback-function-parameters";
import Inclusive from "../../inclusive/inclusive";
import Maximum from "../../maximum/maximum";
import GreaterThanMinimumFunction from "../boolean/lower-than-maximum-parameter";
import Dynamic from "@dikac/t-validator/message/function/validatable-parameter";
import DynamicValue from "@dikac/t-validator/value/validatable";

export type LowerThanMaximumArgument = Minimum & Maximum & Inclusive;
export type LowerThanMaximumArgumentMessage<Type extends LowerThanMaximumArgument, MessageT> = Dynamic<Type, MessageT, LowerThanMaximumArgument & DynamicValue<Type>>;

export default class LowerThanMaximumParameter<MessageT, ValueT extends LowerThanMaximumArgument>
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
        message : LowerThanMaximumArgumentMessage<ValueT, MessageT>
    );
    constructor(
        argument : ValueT & Message<LowerThanMaximumArgumentMessage<ValueT, MessageT>>,
    )
    constructor(
        argument : ValueT & Message<LowerThanMaximumArgumentMessage<ValueT, MessageT>>,
        message ?: LowerThanMaximumArgumentMessage<ValueT, MessageT>
    ) {

        let msg = MessageCallback(argument, GreaterThanMinimumFunction, ()=>(message || argument.message)(this));

        super({value : argument}, msg, msg);

        this.minimum = argument.minimum;
        this.maximum = argument.maximum;
        this.inclusive = argument.inclusive;

    }
}
