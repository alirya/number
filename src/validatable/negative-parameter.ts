import Validatable from "@alirya/validatable/validatable";
import Message from "@alirya/message/message";
import Value from "@alirya/value/value";
import ValueOf from "@alirya/value/value-of/value-of";
import ToString from "@alirya/string/to-string";
import NegativeMessage from "../assert/string/negative-parameter";
import NegativeParameters from "./negative-parameters";
import StrictOmit from "@alirya/object/strict-omit";
import {PositiveArgument as NegativeArgument} from "./positive-parameter";

export {NegativeArgument};

export default function NegativeParameter<MessageT>(
    {
        value
    } : StrictOmit<NegativeArgument<MessageT>, 'message'>
) : Readonly<Validatable & Message<string> & Value<number>> & ValueOf<number> & ToString<[number|void]>

export default function NegativeParameter<MessageT>(
    {
        message,
        value
    } : Required<NegativeArgument<MessageT>>
) : Readonly<Validatable & Message<MessageT> & Value<number>> & ValueOf<number> & ToString<[number|void]>

export default function NegativeParameter<MessageT>(
    {
        message = NegativeMessage,
        value
    } : NegativeArgument<MessageT|string>
) : Readonly<Validatable & Message<MessageT|string> & Value<number>> & ValueOf<number> & ToString<[number|void]> {

    return NegativeParameters(value, (value, valid) => message({value, valid}));
}
