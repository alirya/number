import Number from "./number";
import NumberString from "../validatable/string/number";
import Validator from "@dikac/t-validator/simple";
import Instance from "@dikac/t-validator/validatable/validatable";

export default function NumberStandard() : Validator<unknown, number, Readonly<Instance<unknown, string>>> {

    return Number(NumberString);
}
