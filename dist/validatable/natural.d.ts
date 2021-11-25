import NaturalParameters, { NaturalType } from "./natural-parameters";
import NaturalParameter, { NaturalArgument } from "./natural-parameter";
declare namespace Natural {
    const Parameters: typeof NaturalParameters;
    const Parameter: typeof NaturalParameter;
    type Argument<MessageT> = NaturalArgument<MessageT>;
    type Type<MessageT> = NaturalType<MessageT>;
}
export default Natural;
