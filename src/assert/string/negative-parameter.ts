import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import NegativeParameters from "./negative-parameters";

export default function NegativeParameter(
   //value : number,
   //valid : boolean,
   //subject : string = '',
    {
        value,
        valid,
        subject,
    } : Value<number> & Validatable & {subject ?: string}
) : string {

    return NegativeParameters(value, valid, subject);

}

