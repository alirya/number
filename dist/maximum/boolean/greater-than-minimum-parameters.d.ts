import Minimum from "../../minimum/minimum";
import Maximum from "../maximum";
import Inclusive from "../../inclusive/inclusive";
export default function GreaterThanMinimumParameters({ maximum, minimum, inclusive, }: Readonly<Minimum & Maximum & Inclusive>): boolean;
