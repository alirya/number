import Dynamic from "@dikac/t-validator/message/function/dynamic-parameters";
import GreaterThanMinimumParameter, { GreaterThanMinimumArgument } from "./greater-than-minimum-parameter";
export default class GreaterThanMinimumParameters<MessageT> extends GreaterThanMinimumParameter<MessageT, GreaterThanMinimumArgument> {
    constructor(minimum: number, maximum: number, inclusive: boolean, message: Dynamic<number, MessageT, [maximum: number, inclusive: boolean]>);
}
