import Minimum from "./minimum/minimum";
import Maximum from "./maximum/maximum";
import Inclusive from "./inclusive/inclusive";
export default function RandomIntegerParameter({ minimum, maximum, inclusive, }: Minimum & Maximum & Partial<Inclusive>): number;
