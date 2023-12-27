import {CallbackClassParameters, CallbackClassParameter, CallbackType as BaseCallbackType} from '@axiona/validator/validatable/callback.js';
import ValueOf from '@axiona/value/value-of/value-of.js';
import ToString from '@axiona/string/to-string.js';

export interface CallbackType<Type extends number, MessageType>
    extends
        BaseCallbackType<number, Type, MessageType>,
        ValueOf<number>,
        ToString<[number|void]>
{}

export class CallbackParameters<
    Type extends number,
    MessageType = unknown
> extends CallbackClassParameters<number, Type, MessageType> implements CallbackType<Type, MessageType> {

    valueOf() : number {

        return this.value;
    }

    toString(radix ?: number) : string {

        return this.value.toString(radix);
    }
}


export class CallbackParameter<
    Type extends number,
    MessageType = unknown
> extends CallbackClassParameter<number, Type, MessageType> implements CallbackType<Type, MessageType> {

    valueOf() : number {

        return this.value;
    }

    toString(radix ?: number) : string {

        return this.value.toString(radix);
    }
}


namespace Callback {
    export const Parameters = CallbackParameters;
    export const Parameter = CallbackParameter;
}
export default Callback;
