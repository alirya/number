import { IntegerType as FiniteType } from "./integer-parameters";
import Dynamic from "@dikac/t-validator/message/function/dynamic-parameters";
export { FiniteType };
export default function FiniteParameters<MessageT>(number: number): FiniteType<string>;
export default function FiniteParameters<MessageT>(number: number, message: Dynamic<number, MessageT>): FiniteType<MessageT>;
