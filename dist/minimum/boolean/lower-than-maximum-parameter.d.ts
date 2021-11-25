import Minimum from "../../minimum/minimum";
import Maximum from "../../maximum/maximum";
import Inclusive from "../../inclusive/inclusive";
export default function LowerThanMaximumParameter({ maximum, minimum, inclusive, }: Readonly<Minimum & Maximum & Inclusive>): boolean;
