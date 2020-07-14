import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import IntegerAssert from "../../boolean/string/integer";

export default function Integer(object : Readonly<Value<number> & Validatable>) : string {

    return IntegerAssert(object.valid, object.value)
}
