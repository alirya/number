import IntegerParameters from "./integer-parameters";
import IntegerParameter, { IntegerArgument } from "./integer-parameter";
declare namespace Integer {
    const Parameters: typeof IntegerParameters;
    const Parameter: typeof IntegerParameter;
    type Argument<MessageT> = IntegerArgument<MessageT>;
}
export default Integer;
