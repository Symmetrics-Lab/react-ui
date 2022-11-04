import clsx from 'clsx';
import type { ValidationListProps } from './ValidationList.types';

export const ValidationListItem = ({ condition, text }: { condition: boolean; text: string }) => (
  <div className={clsx('w-full md:w-1/3', condition ? 'text-green-700' : 'text-gray-400')}>
    <div className={clsx('flex items-center text-sm')}>
      <div className={clsx('mr-1', condition ? 'text-primary-400' : null)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <span className={clsx('mr-1', condition ? 'line-through' : null)}>{text}</span>
    </div>
  </div>
);

export default function ValidationList(props: ValidationListProps) {
  const { validation, length, lowerCase, upperCase, number, specialCharacter, allValid } = props;
  return (
    <div className="w-full">
      <p className="ml-2 text-gray-700">{allValid && 'Great password!'}</p>
      <div className="w-full pl-2 flex-none md:flex md:flex-wrap">
        {validation?.minLength ? (
          <ValidationListItem
            condition={length}
            text={`${validation.minLength} characters minimum`}
          />
        ) : null}
        {validation?.lowerCase ? (
          <ValidationListItem condition={lowerCase} text={`One lowercase character`} />
        ) : null}
        {validation?.upperCase ? (
          <ValidationListItem condition={upperCase} text={`One uppercase character`} />
        ) : null}
        {validation?.number ? <ValidationListItem condition={number} text={`One number`} /> : null}
        {validation?.specialCharacter ? (
          <ValidationListItem condition={specialCharacter} text={`One special character`} />
        ) : null}
      </div>
    </div>
  );
}
