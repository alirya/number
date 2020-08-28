import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import GreaterThanMinimumValidatable from "../validatable/lower-than-maximum";
import Minimum from "../../minimum/minimum";
import Maximum from "../../maximum/maximum";
import Inclusive from "../../inclusive/inclusive";
import SimpleValidatable from "@dikac/t-validator/validatable/simple";
export default class LowerThanMaximum<Base extends Minimum & Maximum & Inclusive, MessageT> implements Validator<Base, Base, boolean, boolean, GreaterThanMinimumValidatable<MessageT, Base>>, Message<(result: Readonly<Maximum & Inclusive & Minimum & Validatable>) => MessageT> {
    message: (result: Readonly<Maximum & Inclusive & Minimum & Validatable>) => MessageT;
    constructor(message: (result: Readonly<Maximum & Inclusive & Minimum & Validatable>) => MessageT);
    validate<Argument extends Base>(value: Argument): SimpleValidatable<Base, Argument, Base, GreaterThanMinimumValidatable<MessageT, Base>>;
}
