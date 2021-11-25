import Maximum from "../maximum/maximum";
import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Inclusive from "../inclusive/inclusive";
import ValueOf from "@dikac/t-value/value-of/value-of";
import ToString from "@dikac/t-string/to-string";
import Dynamic from "@dikac/t-validator/message/function/dynamic-parameters";
export interface LowerType<ValueT extends number, MessageT> extends Readonly<Inclusive>, Readonly<Maximum>, Readonly<Value<ValueT>>, Readonly<Message<MessageT>>, Readonly<Validatable>, ValueOf<number>, ToString<[number | void]> {
}
export default class LowerParameters<ValueT extends number, MessageT> implements LowerType<ValueT, MessageT> {
    #private;
    readonly value: ValueT;
    readonly maximum: number;
    readonly inclusive: boolean;
    constructor(value: ValueT, maximum: number, inclusive: boolean, message: Dynamic<ValueT, MessageT, [maximum: number, inclusive: boolean]>);
    get valid(): boolean;
    get message(): MessageT;
    valueOf(): number;
    toString(radix?: number): string;
}
