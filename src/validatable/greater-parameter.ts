import Minimum from "../minimum/minimum";
import Value from "@dikac/t-value/value";
import Message from "@dikac/t-message/message";
import Inclusive from "../inclusive/inclusive";
import Dynamic from "@dikac/t-validator/message/function/validatable-parameter";
import ValueDynamic from "@dikac/t-validator/value/validatable";
import GreaterParameters from "./greater-parameters";

export type GreaterArgument<ValueT extends number, MessageT> =
    Value<ValueT> &
    Minimum &
    Inclusive &
    Message<Dynamic<ValueT, MessageT, ValueDynamic<ValueT> & Inclusive & Minimum>>

export default class GreaterParameter<ValueT extends number, MessageT> extends GreaterParameters<ValueT, MessageT> {

    constructor(
        {
            value,
            minimum,
            inclusive,
            message,
        } : GreaterArgument<ValueT, MessageT>,
    ) {

        super(
            value,
            minimum,
            inclusive,
            (value, valid, minimum, inclusive) =>
                message({value, valid, minimum, inclusive})
        );

    }

}
