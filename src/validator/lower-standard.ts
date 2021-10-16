import Lower from "./lower";
import LowerString from "../validatable/string/lower";
import Validator from "@dikac/t-validator/validator";
import LowerValidatable from "../validatable/lower";

export default function LowerStandard(
    maximum : number,
    inclusive : boolean
) : Validator<number, number, boolean, boolean, LowerValidatable<number, string>> {

    return Lower(maximum, inclusive, LowerString);
}
