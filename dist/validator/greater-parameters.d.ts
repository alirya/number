import Validator from "@dikac/t-validator/validator";
import GreaterValidatable from "../validatable/greater-parameters";
import Dynamic from "@dikac/t-validator/message/function/dynamic-parameters";
export default function GreaterParameters(minimum: number, inclusive: boolean): Validator<number, number, boolean, boolean, GreaterValidatable<number, string>>;
export default function GreaterParameters<MessageT>(minimum: number, inclusive: boolean, message: Dynamic<number, MessageT, [minimum: number, inclusive: boolean]>): Validator<number, number, boolean, boolean, GreaterValidatable<number, MessageT>>;
