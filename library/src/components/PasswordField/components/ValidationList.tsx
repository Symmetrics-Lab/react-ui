//import { CheckCircleIcon } from '@heroicons/react/20/solid';
import Chip from '../../Chip';
import type { ValidationListProps } from './ValidationList.types';

export const ValidationListItem = ({ condition, text }: { condition: boolean; text: string }) => (
  <Chip
    className="m-1"
    variant={condition ? 'secondary' : 'default'}
    // {...(condition && { icon: CheckCircleIcon })}
  >
    {text}
  </Chip>
);

export default function ValidationList(props: ValidationListProps) {
  const { validation, length, lowerCase, upperCase, number, specialCharacter, allValid, message } =
    props;
  return (
    <div className="w-full mt-2">
      <p className="ml-2 text-symlab-green-100 dark:text-symlab-green-10 text-sm">{allValid && (message || 'Great password!')}</p>
      <div className="w-full pl-2 flex-none md:flex md:flex-wrap">
        {validation?.minLength ? (
          <ValidationListItem
            condition={length}
            text={`${validation.minLength} caracteres mínimo`}
          />
        ) : null}
        {validation?.lowerCase ? (
          <ValidationListItem condition={lowerCase} text={`Un caracter en minúscula`} />
        ) : null}
        {validation?.upperCase ? (
          <ValidationListItem condition={upperCase} text={`Un caracter en mayúscula`} />
        ) : null}
        {validation?.number ? <ValidationListItem condition={number} text={`Un número`} /> : null}
        {validation?.specialCharacter ? (
          <ValidationListItem condition={specialCharacter} text={`Un caracter especial`} />
        ) : null}
      </div>
    </div>
  );
}
