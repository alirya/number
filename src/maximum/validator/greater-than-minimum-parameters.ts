import Validator from "@alirya/validator/validator";
import GreaterThanMinimumValidatable from "../validatable/greater-than-minimum-parameters";
import Dynamic from "@alirya/validator/message/function/validatable-parameters";
import {GreaterThanMinimumArgument} from "../validatable/greater-than-minimum-parameter";

export default function GreaterThanMinimumParameters<MessageT>(
    message : Dynamic<number, MessageT, [minimum: number, inclusive:boolean]>
) : Validator<GreaterThanMinimumArgument, GreaterThanMinimumArgument, boolean, boolean, GreaterThanMinimumValidatable<MessageT>> {

    return function ({minimum, maximum, inclusive}) {

        return new GreaterThanMinimumValidatable(minimum, maximum, inclusive, message);

    } as Validator<GreaterThanMinimumArgument, GreaterThanMinimumArgument, boolean, boolean, GreaterThanMinimumValidatable<MessageT>>;
}
