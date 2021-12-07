import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import GreaterThanMinimumValidatable from "../validatable/greater-than-minimum-parameters";
import Minimum from "../../minimum/minimum";
import Maximum from "../maximum";
import Inclusive from "../../inclusive/inclusive";
import Dynamic from "@dikac/t-validator/message/function/dynamic-parameters";
import {GreaterThanMinimumArgument} from "../validatable/greater-than-minimum-parameter";

export default function GreaterThanMinimumParameters<MessageT>(
    message : Dynamic<number, MessageT, [minimum: number, inclusive:boolean]>
) : Validator<GreaterThanMinimumArgument, GreaterThanMinimumArgument, boolean, boolean, GreaterThanMinimumValidatable<MessageT>> {

    return function ({minimum, maximum, inclusive}) {

        return new GreaterThanMinimumValidatable(minimum, maximum, inclusive, message);

    } as Validator<GreaterThanMinimumArgument, GreaterThanMinimumArgument, boolean, boolean, GreaterThanMinimumValidatable<MessageT>>;
}
