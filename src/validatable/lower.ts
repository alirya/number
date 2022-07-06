import Maximum from '../maximum/maximum.js';
import Value from '@alirya/value/value.js';
import Validatable from '@alirya/validatable/validatable.js';
import Message from '@alirya/message/message.js';
import LowerFromObject from '../boolean/lower.js';
import Inclusive from '../inclusive/inclusive.js';
import ValueOf from '@alirya/value/value-of/value-of.js';
import ToString from '@alirya/string/to-string.js';
import {ValidatableParameters, ValidatableParameter} from '@alirya/validator/message/function/validatable.js';
import MemoizeAccessor from '@alirya/object/function/memoize-accessor.js';
import ValueDynamic from '@alirya/validator/value/validatable.js';

export interface LowerType<ValueT extends number, MessageT> extends Readonly<Inclusive>,
    Readonly<Maximum>,
    Readonly<Value<ValueT>>,
    Readonly<Message<MessageT>>,
    Readonly<Validatable>,
    ValueOf<number>,
    ToString<[number|void]> {
}

export class LowerParameters<ValueT extends number, MessageT> implements LowerType<ValueT, MessageT> {

    #message : ValidatableParameters<ValueT, MessageT, [maximum:number, inclusive: boolean]>;

    constructor(
        readonly value : ValueT,
        readonly maximum : number,
        readonly inclusive : boolean,
        message : ValidatableParameters<ValueT, MessageT, [maximum:number, inclusive: boolean]>
    ) {
        this.#message = message;
    }

    @MemoizeAccessor()
    get valid () : boolean {

        return LowerFromObject.Parameter(this);
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


export type LowerArgument<ValueT extends number, MessageT> =
    Value<ValueT> &
    Maximum &
    Inclusive &
    Message<ValidatableParameter<ValueT, MessageT, ValueDynamic<ValueT> & Inclusive & Maximum>>;

export class LowerParameter<ValueT extends number, MessageT> extends LowerParameters<ValueT, MessageT> {

    constructor(
        {
            value,
            maximum,
            inclusive,
            message,
        } : LowerArgument<ValueT, MessageT>,
    ) {

        super(
            value,
            maximum,
            inclusive,
            (value, valid, maximum, inclusive) =>
                message({value, valid, maximum, inclusive})
        );

    }

}


namespace Lower {
    export const Parameters = LowerParameters;
    export const Parameter = LowerParameter;
    export type Argument<ValueT extends number, MessageT> = LowerArgument<ValueT, MessageT>;
    export type Type<ValueT extends number, MessageT> = LowerType<ValueT, MessageT>;
}
export default Lower;
