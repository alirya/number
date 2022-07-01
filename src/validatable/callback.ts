import {CallbackClassParameters, CallbackClassParameter, CallbackType as BaseCallbackType} from '@alirya/validator/validatable/callback';
import ValueOf from '@alirya/value/value-of/value-of';
import ToString from '@alirya/string/to-string';

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
