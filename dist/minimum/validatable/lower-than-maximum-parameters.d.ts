import Dynamic from "@dikac/t-validator/message/function/dynamic-parameters";
import LowerThanMaximumParameter, { LowerThanMaximumArgument } from "./lower-than-maximum-parameter";
export default class LowerThanMaximumParameters<MessageT> extends LowerThanMaximumParameter<MessageT, LowerThanMaximumArgument> {
    constructor(minimum: number, maximum: number, inclusive: boolean, message: Dynamic<number, MessageT, [maximum: number, inclusive: boolean]>);
}
