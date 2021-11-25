import Minimum from "../minimum/minimum";
import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Inclusive from "../inclusive/inclusive";
import ValueOf from "@dikac/t-value/value-of/value-of";
import ToString from "@dikac/t-string/to-string";
import Dynamic from "@dikac/t-validator/message/function/dynamic-parameters";
export interface GreaterType<ValueT extends number, MessageT> extends Readonly<Inclusive>, Readonly<Value<ValueT>>, Readonly<Message<MessageT>>, Readonly<Validatable>, Readonly<Minimum>, ValueOf<number>, ToString<[number | void]> {
}
export default class GreaterParameters<ValueT extends number, MessageT> implements GreaterType<ValueT, MessageT> {
    #private;
    readonly value: ValueT;
    readonly minimum: number;
    readonly inclusive: boolean;
    constructor(value: ValueT, minimum: number, inclusive: boolean, message: Dynamic<ValueT, MessageT, [minimum: number, inclusive: boolean]>);
    get valid(): boolean;
    get message(): MessageT;
    valueOf(): number;
    toString(radix?: number): string;
}
