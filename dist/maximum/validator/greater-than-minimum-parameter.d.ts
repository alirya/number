import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import GreaterThanMinimumValidatable from "../validatable/greater-than-minimum-parameter";
import Minimum from "../../minimum/minimum";
import Maximum from "../maximum";
import Inclusive from "../../inclusive/inclusive";
export default function GreaterThanMinimumParameter<Base extends Minimum & Maximum & Inclusive, MessageT>(message: (result: Readonly<Maximum & Inclusive & Minimum & Validatable>) => MessageT): Validator<Base, Base, boolean, boolean, GreaterThanMinimumValidatable<MessageT, Base>>;
