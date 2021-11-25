import NaturalParameters, {NaturalType} from "./natural-parameters";
import NaturalParameter, {NaturalArgument} from "./natural-parameter";

namespace Natural {

    export const Parameters = NaturalParameters
    export const Parameter = NaturalParameter
    export type Argument<MessageT> = NaturalArgument<MessageT>
    export type Type<MessageT> = NaturalType<MessageT>
}

export default Natural;
