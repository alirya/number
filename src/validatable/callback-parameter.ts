import ValidatableCallbacks from "@alirya/validator/validatable/callback-class-parameter";
import ValueOf from "@alirya/value/value-of/value-of";
import ToString from "@alirya/string/to-string";

export default class CallbackParameters<
    Type extends number,
    MessageType = unknown
> extends ValidatableCallbacks<number, Type, MessageType> implements ValueOf<number>, ToString<[number|void]> {

    valueOf() : number {

        return this.value;
    }

    toString(radix ?: number) : string {

        return this.value.toString(radix);
    }
}
