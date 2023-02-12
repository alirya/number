import Minimum from '../minimum/minimum.js';
import Value from '@alirya/value/value.js';
import Validatable from '@alirya/validatable/validatable.js';
import ValidatorValidatable from '@alirya/validator/validatable/validatable.js';
import Message from '@alirya/message/message.js';
import GreaterObject from '../boolean/greater.js';
import Inclusive from '../inclusive/inclusive.js';
import ValueOf from '@alirya/value/value-of/value-of.js';
import ToString from '@alirya/string/to-string.js';
import MemoizeAccessor from '@alirya/object/function/memoize-accessor.js';
import {ValidatableParameters, ValidatableParameter} from '@alirya/validator/message/function/validatable.js';
import ValueDynamic from '@alirya/validator/value/validatable.js';

export interface GreaterContext/*<ValueT extends number, MessageT>*/ extends
    Readonly<Inclusive>,
    // Readonly<Value<ValueT>>,
    // Readonly<Message<MessageT>>,
    // Readonly<Validatable>,
    Readonly<Minimum>,
    ValueOf<number>,
    ToString<[number|void]> {
}
export type GreaterArgumentsMessage<ValueT extends number, MessageT> = ValidatableParameters<ValueT, MessageT, [minimum:number, inclusive: boolean]>;


export class GreaterParameters<ValueT extends number, MessageT> implements ValidatorValidatable<ValueT>, GreaterContext/*<ValueT, MessageT>*/
{
    #message : GreaterArgumentsMessage<ValueT, MessageT>;

    constructor(
        readonly value : ValueT,
        readonly minimum : number,
        readonly inclusive : boolean,
        message : GreaterArgumentsMessage<ValueT, MessageT>
    ) {
        this.#message = message;
    }

    @MemoizeAccessor()
    get valid () : boolean {

        return GreaterObject.Parameter(this);
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

export type GreaterArgument<ValueT extends number, MessageT> =
    Value<ValueT> &
    Minimum &
    Inclusive &
    Message<GreaterArgumentMessage<ValueT, MessageT>>;


export type GreaterArgumentMessage<ValueT extends number, MessageT> = ValidatableParameter<ValueT, MessageT, Inclusive & Minimum & ValueDynamic<ValueT>>;

export class GreaterParameter<ValueT extends number, MessageT> extends GreaterParameters<ValueT, MessageT> {

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


namespace Greater {
    export const Parameters = GreaterParameters;
    export const Parameter = GreaterParameter;
    export type Context/*<ValueT extends number, MessageT>*/ = GreaterContext/*<ValueT, MessageT>*/;
    export type Argument<ValueT extends number, MessageT> = GreaterArgument<ValueT, MessageT>;
}
export default Greater;
