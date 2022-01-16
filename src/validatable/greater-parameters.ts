import Minimum from '../minimum/minimum';
import Value from '@alirya/value/value';
import Validatable from '@alirya/validatable/validatable';
import Message from '@alirya/message/message';
import GreaterObject from '../boolean/greater-parameter';
import Inclusive from '../inclusive/inclusive';
import ValueOf from '@alirya/value/value-of/value-of';
import ToString from '@alirya/string/to-string';
import MemoizeAccessor from '@alirya/object/function/memoize-accessor';
import Dynamic from '@alirya/validator/message/function/validatable-parameters';

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
