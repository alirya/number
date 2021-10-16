import Positive from "./positive";
import PositiveString from "../validatable/string/positive";
import Validator from "@dikac/t-validator/validator";
import Instance from "@dikac/t-validator/validatable/validatable";

export default function PositiveStandard() : Validator<number, number, boolean, boolean, Readonly<Instance<number, string>>> {

    return Positive(PositiveString);
}
