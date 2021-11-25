import { PositiveArgument as NaturalArgument } from "./positive-parameter";
import StrictOmit from "@dikac/t-object/strict-omit";
import { NegativeType as NaturalType } from "./negative-parameters";
export { NaturalArgument };
export default function NaturalParameter<MessageT>({ value }: StrictOmit<NaturalArgument<MessageT>, 'message'>): NaturalType<string>;
export default function NaturalParameter<MessageT>({ message, value }: Required<NaturalArgument<MessageT>>): NaturalType<MessageT>;
