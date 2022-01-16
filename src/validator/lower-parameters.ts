import Validator from '@alirya/validator/validator';
import LowerValidatable from '../validatable/lower-parameters';
import Dynamic from '@alirya/validator/message/function/validatable-parameters';
import LowerString from '../assert/string/lower-parameters';

export default function LowerParameters<MessageT> (
    maximum : number,
    inclusive : boolean,
) : Validator<number, number, boolean, boolean, LowerValidatable<number, MessageT>>;

export default function LowerParameters<MessageT> (
    maximum : number,
    inclusive : boolean,
    message : Dynamic<number, MessageT, [maximum:number, inclusive: boolean]>
) : Validator<number, number, boolean, boolean, LowerValidatable<number, MessageT>>;

export default function LowerParameters<MessageT> (
    maximum : number,
    inclusive : boolean,
    message : Dynamic<number, MessageT|string, [maximum:number, inclusive: boolean]> = LowerString
) : Validator<number, number, boolean, boolean, LowerValidatable<number, MessageT>> {

    return function (value) {

        return new LowerValidatable(value, maximum, inclusive, message);

    } as Validator<number, number, boolean, boolean, LowerValidatable<number, MessageT>>;
}
