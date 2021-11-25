import ValidatableCallbacks from "@dikac/t-validator/validatable/callback-class-parameter";
import ValueOf from "@dikac/t-value/value-of/value-of";
import ToString from "@dikac/t-string/to-string";
export default class CallbackParameters<Type extends number, MessageType = unknown> extends ValidatableCallbacks<number, Type, MessageType> implements ValueOf<number>, ToString<[number | void]> {
    valueOf(): number;
    toString(radix?: number): string;
}
