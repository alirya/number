import Validator from "@dikac/t-validator/validator";
import LowerValidatable from "../validatable/lower-parameters";
import Dynamic from "@dikac/t-validator/message/function/dynamic-parameters";
export default function LowerParameters<MessageT>(maximum: number, inclusive: boolean): Validator<number, number, boolean, boolean, LowerValidatable<number, MessageT>>;
export default function LowerParameters<MessageT>(maximum: number, inclusive: boolean, message: Dynamic<number, MessageT, [maximum: number, inclusive: boolean]>): Validator<number, number, boolean, boolean, LowerValidatable<number, MessageT>>;
