import Integer from "./integer";
import IntegerString from "../validatable/string/integer";
import Validator from "@dikac/t-validator/validator";
import Instance from "@dikac/t-validator/validatable/validatable";

export default function IntegerStandard() : Validator<number, number, boolean, boolean, Readonly<Instance<number, string>>> {

    return Integer(IntegerString);
}
