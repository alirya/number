import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Minimum from "../../minimum/minimum";
import Inclusive from "../../inclusive/inclusive";
/**
 * message for greater validation
 */
export default function GreaterParameter({ valid, value, minimum, inclusive, subject, }: Value<number> & Validatable & Minimum & Inclusive & {
    subject?: string;
}): string;
