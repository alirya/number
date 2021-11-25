import FiniteParameters, {FiniteType} from "./finite-parameters";
import FiniteParameter, {FiniteArgument} from "./finite-parameter";

namespace Finite {

    export const Parameters = FiniteParameters
    export const Parameter = FiniteParameter
    export type Argument<MessageT> = FiniteArgument<MessageT>
    export type Type<MessageT> = FiniteType<MessageT>
}

export default Finite;
