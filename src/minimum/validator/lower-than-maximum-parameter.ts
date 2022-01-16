import Validator from '@alirya/validator/validator';
import Validatable from '@alirya/validatable/validatable';
import GreaterThanMinimumValidatable, {LowerThanMaximumArgument} from '../validatable/lower-than-maximum-parameter';

export default function LowerThanMaximumParameter<Base extends LowerThanMaximumArgument, MessageT>(
    message : (result:Readonly<LowerThanMaximumArgument & Validatable>)=>MessageT
) : Validator<Base, Base, boolean, boolean, GreaterThanMinimumValidatable<MessageT, Base>> {

    return function (value) {

        return new GreaterThanMinimumValidatable(value, message);

    } as Validator<Base, Base, boolean, boolean, GreaterThanMinimumValidatable<MessageT, Base>>;
}
