import Maximum from "../maximum/maximum";
import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import LowerFromObject from "../boolean/lower-parameter";
import Inclusive from "../inclusive/inclusive";
import ValueOf from "@dikac/t-value/value-of/value-of";
import ToString from "@dikac/t-string/to-string";
import Dynamic from "@dikac/t-validator/message/function/validatable-parameters";
import MemoizeAccessor from "@dikac/t-object/function/memoize-accessor";

export interface LowerType<ValueT extends number, MessageT> extends Readonly<Inclusive>,
    Readonly<Maximum>,
    Readonly<Value<ValueT>>,
    Readonly<Message<MessageT>>,
    Readonly<Validatable>,
    ValueOf<number>,
    ToString<[number|void]> {
}

export default class LowerParameters<ValueT extends number, MessageT> implements LowerType<ValueT, MessageT> {

    #message : Dynamic<ValueT, MessageT, [maximum:number, inclusive: boolean]>;

    constructor(
        readonly value : ValueT,
        readonly maximum : number,
        readonly inclusive : boolean,
        message : Dynamic<ValueT, MessageT, [maximum:number, inclusive: boolean]>
    ) {
        this.#message = message;
    }

    @MemoizeAccessor()
    get valid () : boolean {

        return LowerFromObject(this);
    }

    @MemoizeAccessor()
    get message() : MessageT {

        return this.#message(this.value, this.valid, this.maximum, this.inclusive)
    }

    valueOf() : number {

        return this.value;
    }

    toString(radix ?: number) : string {

        return this.value.toString(radix);
    }
}
