import { IntegerType as FiniteType } from "./integer-parameters";
import StrictOmit from "@dikac/t-object/strict-omit";
import { IntegerArgument as FiniteArgument } from "./integer-parameter";
export { FiniteArgument };
export default function FiniteParameter<MessageT>({ value }: StrictOmit<FiniteArgument<MessageT>, 'message'>): FiniteType<string>;
export default function FiniteParameter<MessageT>({ message, value }: Required<FiniteArgument<MessageT>>): FiniteType<MessageT>;
