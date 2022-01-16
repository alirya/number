import InfiniteType from '../string/infinite-parameters';

export default function InfiniteParameters(
    number : number,
    subject ?: string
) : Error {

    return new Error(InfiniteType(number, false, subject));
}
