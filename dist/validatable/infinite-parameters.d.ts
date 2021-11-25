import { IntegerType as InfiniteType } from "./integer-parameters";
import Dynamic from "@dikac/t-validator/message/function/dynamic-parameters";
export { InfiniteType };
export default function InfiniteParameters<MessageT>(number: number): InfiniteType<string>;
export default function InfiniteParameters<MessageT>(number: number, message: Dynamic<number, MessageT>): InfiniteType<MessageT>;
