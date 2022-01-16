import Validator from '@alirya/validator/validator';
import Instance from '@alirya/validator/validatable/validatable';
import Dynamic from '@alirya/validator/message/function/validatable-parameter';
import NaturalString from '../assert/string/natural-parameter';
import NaturalParameters from './natural-parameters';

export default function NaturalParameter() : Validator<number, number, boolean, boolean, Readonly<Instance<number, string>>>;

export default function NaturalParameter<MessageT>(
    message : Dynamic<number, MessageT>
) : Validator<number, number, boolean, boolean, Readonly<Instance<number, MessageT>>>;

export default function NaturalParameter<MessageT>(
    message : Dynamic<number, MessageT|string> = NaturalString
) : Validator<number, number, boolean, boolean, Readonly<Instance<number, MessageT|string>>> {

    return NaturalParameters((value, valid) => message({value, valid}));

}
