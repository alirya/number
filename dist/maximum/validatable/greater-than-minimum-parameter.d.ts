import Minimum from "../../minimum/minimum";
import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import MergeWrapper from "@dikac/t-validator/validatable/readonly-wrapper-parameters";
import Inclusive from "../../inclusive/inclusive";
import Maximum from "../maximum";
import { LowerThanMaximumArgument as GreaterThanMinimumArgument, LowerThanMaximumArgumentMessage as GreaterThanMinimumArgumentMessage } from "../../minimum/validatable/lower-than-maximum-parameter";
export { GreaterThanMinimumArgument, GreaterThanMinimumArgumentMessage };
export default class GreaterThanMinimumParameter<MessageT, ValueT extends GreaterThanMinimumArgument> extends MergeWrapper<Value<ValueT>, Message<MessageT>, Validatable> implements Readonly<Inclusive>, Readonly<Minimum>, Readonly<Maximum> {
    readonly minimum: number;
    readonly maximum: number;
    readonly inclusive: boolean;
    constructor(argument: ValueT, message: GreaterThanMinimumArgumentMessage<ValueT, MessageT>);
    constructor(argument: ValueT & Message<GreaterThanMinimumArgumentMessage<ValueT, MessageT>>);
}
