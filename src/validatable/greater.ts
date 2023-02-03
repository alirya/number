import Minimum from '../minimum/minimum';
import Value from '@alirya/value/value';
import Validatable from '@alirya/validatable/validatable';
import ValidatorValidatable from '@alirya/validator/validatable/validatable';
import Message from '@alirya/message/message';
import GreaterObject from '../boolean/greater';
import Inclusive from '../inclusive/inclusive';
import ValueOf from '@alirya/value/value-of/value-of';
import ToString from '@alirya/string/to-string';
import MemoizeAccessor from '@alirya/object/function/memoize-accessor';
import {ValidatableParameters, ValidatableParameter} from '@alirya/validator/message/function/validatable';
import ValueDynamic from '@alirya/validator/value/validatable';

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
