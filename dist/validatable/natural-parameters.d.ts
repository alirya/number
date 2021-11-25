import Dynamic from "@dikac/t-validator/message/function/dynamic-parameters";
import { IntegerType as NaturalType } from "./integer-parameters";
export type { NaturalType };
export default function NaturalParameters(number: number): NaturalType<string>;
export default function NaturalParameters<MessageT>(number: number, message: Dynamic<number, MessageT>): NaturalType<MessageT>;
