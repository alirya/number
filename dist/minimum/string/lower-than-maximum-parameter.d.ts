import Minimum from "../../minimum/minimum";
import Maximum from "../../maximum/maximum";
import Validatable from "@dikac/t-validatable/validatable";
import Inclusive from "../../inclusive/inclusive";
export default function LowerThanMaximumParameter({ minimum, valid, maximum, inclusive, }: Readonly<Minimum & Maximum & Validatable & Inclusive>): string;
