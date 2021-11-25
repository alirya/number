import FiniteParameters, { FiniteType } from "./finite-parameters";
import FiniteParameter, { FiniteArgument } from "./finite-parameter";
declare namespace Finite {
    const Parameters: typeof FiniteParameters;
    const Parameter: typeof FiniteParameter;
    type Argument<MessageT> = FiniteArgument<MessageT>;
    type Type<MessageT> = FiniteType<MessageT>;
}
export default Finite;
