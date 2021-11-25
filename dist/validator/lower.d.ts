import LowerParameters from "./lower-parameters";
import LowerParameter, { LowerArgument } from "./lower-parameter";
declare namespace Lower {
    const Parameters: typeof LowerParameters;
    const Parameter: typeof LowerParameter;
    type Argument<MessageT> = LowerArgument<MessageT>;
}
export default Lower;
