import Validator from "@dikac/t-validator/validator";
import LowerValidatable from "../validatable/lower";
export default function LowerStandard(maximum: number, inclusive: boolean): Validator<number, number, boolean, boolean, LowerValidatable<number, string>>;
