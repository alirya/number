import Maximum from '../maximum/maximum';
import Value from '@alirya/value/value';
import Validatable from '@alirya/validatable/validatable';
import Message from '@alirya/message/message';
import LowerFromObject from '../boolean/lower-parameter';
import Inclusive from '../inclusive/inclusive';
import ValueOf from '@alirya/value/value-of/value-of';
import ToString from '@alirya/string/to-string';
import Dynamic from '@alirya/validator/message/function/validatable-parameters';
import MemoizeAccessor from '@alirya/object/function/memoize-accessor';

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

        return this.#message(this.value, this.valid, this.maximum, this.inclusive);
    }

    valueOf() : number {

        return this.value;
    }

    toString(radix ?: number) : string {

        return this.value.toString(radix);
    }
}
