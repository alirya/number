import Value from "@dikac/t-value/value";
import Minimum from "../../minimum/minimum";
import Inclusive from "../../inclusive/inclusive";
export default function GreaterParameter({ value, minimum, inclusive, subject, }: Value<number> & Minimum & Inclusive & {
    subject?: string;
}): Error;
