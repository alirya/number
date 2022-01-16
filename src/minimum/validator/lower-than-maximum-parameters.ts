import Validator from "@alirya/validator/validator";
import GreaterThanMinimumValidatable from "../validatable/lower-than-maximum-parameters";
import Minimum from "../../minimum/minimum";
import Maximum from "../../maximum/maximum";
import Inclusive from "../../inclusive/inclusive";
import Dynamic from "@alirya/validator/message/function/validatable-parameters";
import {LowerThanMaximumArgument} from "../validatable/lower-than-maximum-parameter";

export default function LowerThanMaximumParameters<Base extends Minimum & Maximum & Inclusive, MessageT>(
    message : Dynamic<number, MessageT, [maximum:number, inclusive:boolean]>
) : Validator<LowerThanMaximumArgument, LowerThanMaximumArgument, boolean, boolean, GreaterThanMinimumValidatable<MessageT>> {

    return function ({minimum, maximum, inclusive}) {

        return new GreaterThanMinimumValidatable(minimum, maximum, inclusive, message);

    } as Validator<LowerThanMaximumArgument, LowerThanMaximumArgument, boolean, boolean, GreaterThanMinimumValidatable<MessageT>>;
}
