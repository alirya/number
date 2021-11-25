import Dynamic from "@dikac/t-validator/message/function/dynamic-parameters";
import { IntegerType as NegativeType } from "./integer-parameters";
export type { NegativeType };
export default function NegativeParameters(number: number): NegativeType<string>;
export default function NegativeParameters<MessageT>(number: number, message: Dynamic<number, MessageT>): NegativeType<MessageT>;
