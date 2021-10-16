import Infinite from "./infinite";
import InfiniteString from "../validatable/string/infinite";
import Validator from "@dikac/t-validator/validator";
import Instance from "@dikac/t-validator/validatable/validatable";

export default function InfiniteStandard() : Validator<number, number, boolean, boolean, Readonly<Instance<number, string>>> {

    return Infinite(InfiniteString);
}
