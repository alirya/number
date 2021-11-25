import Minimum from "../minimum/minimum";
import Value from "@dikac/t-value/value";
import Message from "@dikac/t-message/message";
import Inclusive from "../inclusive/inclusive";
import Dynamic from "@dikac/t-validator/message/function/dynamic-parameter";
import ValueDynamic from "@dikac/t-validator/value/dynamic";
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
        //
        //
        // readonly value : ValueT,
        // readonly minimum : number,
        // readonly inclusive : boolean,
        // private messageFactory : (result:Readonly<Value<ValueT> & Inclusive & Minimum & Validatable>)=>MessageT
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
