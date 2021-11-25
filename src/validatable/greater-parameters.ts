import Minimum from "../minimum/minimum";
import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import GreaterObject from "../boolean/greater-parameter";
import Inclusive from "../inclusive/inclusive";
import ValueOf from "@dikac/t-value/value-of/value-of";
import ToString from "@dikac/t-string/to-string";
import MemoizeAccessor from "@dikac/t-object/function/memoize-accessor";
import Dynamic from "@dikac/t-validator/message/function/dynamic-parameters";
import ValueDynamic from "@dikac/t-validator/value/dynamic";

export interface GreaterType<ValueT extends number, MessageT> extends
    Readonly<Inclusive>,
    Readonly<Value<ValueT>>,
    Readonly<Message<MessageT>>,
    Readonly<Validatable>,
    Readonly<Minimum>,
    ValueOf<number>,
    ToString<[number|void]> {
}

export default class GreaterParameters<ValueT extends number, MessageT> implements GreaterType<ValueT, MessageT>
{
    #message : Dynamic<ValueT, MessageT, [minimum:number, inclusive: boolean]>;

    constructor(
        readonly value : ValueT,
        readonly minimum : number,
        readonly inclusive : boolean,
        message : Dynamic<ValueT, MessageT, [minimum:number, inclusive: boolean]>
    ) {
        this.#message = message;
    }

    @MemoizeAccessor()
    get valid () : boolean {

        return GreaterObject(this);
    }

    @MemoizeAccessor()
    get message() : MessageT {

        return this.#message(this.value, this.valid, this.minimum, this.inclusive);
    }

    valueOf() : number {

        return this.value;
    }

    toString(radix ?: number) : string {

        return this.value.toString(radix);
    }
}
