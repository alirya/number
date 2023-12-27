import Maximum from '../maximum/maximum.js';
import Value from '@axiona/value/value.js';
import Validatable from '@axiona/validatable/validatable.js';
import ValidatorValidatable from '@axiona/validator/validatable/validatable.js';
import Message from '@axiona/message/message.js';
import LowerFromObject from '../boolean/lower.js';
import Inclusive from '../inclusive/inclusive.js';
import ValueOf from '@axiona/value/value-of/value-of.js';
import ToString from '@axiona/string/to-string.js';
import {ValidatableParameters, ValidatableParameter} from '@axiona/validator/message/function/validatable.js';
import MemoizeAccessor from '@axiona/object/function/memoize-accessor.js';
import ValueDynamic from '@axiona/validator/value/validatable.js';

export interface LowerContext/*<ValueT extends number, MessageT> */extends Readonly<Inclusive>,
    Readonly<Maximum>,
    // Readonly<Value<ValueT>>,
    // Readonly<Message<MessageT>>,
    // Readonly<Validatable>,
    ValueOf<number>,
    ToString<[number|void]> {
}

export class LowerParameters<ValueT extends number, MessageT> implements ValidatorValidatable<ValueT, MessageT>, LowerContext/*<ValueT, MessageT>*/ {

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
    export type Context/*<ValueT extends number, MessageT>*/ = LowerContext/*<ValueT, MessageT>*/;
}
export default Lower;
