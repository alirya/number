import Validator from "@dikac/t-validator/validator";
import GreaterValidatable from "../validatable/greater";
export default function GreaterStandard(minimum: number, inclusive: boolean): Validator<number, number, boolean, boolean, GreaterValidatable<number, string>>;
