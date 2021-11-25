import { IntegerType as InfiniteType } from "./integer-parameters";
import StrictOmit from "@dikac/t-object/strict-omit";
import { IntegerArgument as InfiniteArgument } from "./integer-parameter";
export { InfiniteArgument };
export default function InfiniteParameter<MessageT>({ value }: StrictOmit<InfiniteArgument<MessageT>, 'message'>): InfiniteType<string>;
export default function InfiniteParameter<MessageT>({ message, value }: Required<InfiniteArgument<MessageT>>): InfiniteType<MessageT>;
