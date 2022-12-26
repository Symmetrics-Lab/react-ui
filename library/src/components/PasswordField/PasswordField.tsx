import { ChangeEvent, forwardRef, Ref, useState } from 'react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/20/solid';

import HelperText from '../HelperText/HelperText';
import Input from '../Input';
import Label from '../Label';
import ValidationList from './components/ValidationList';
import usePasswordValidation from './hooks/usePasswordValidation';
import { PasswordFieldProps } from './PasswordField.types';
import clsx from 'clsx';
const PasswordField = forwardRef<Ref<HTMLInputElement>, PasswordFieldProps>(function PasswordField(
  props,
  ref
) {
  const {
    label,
    className,
    id,
    helperText,
    required,
    disabled,
    readOnly,
    hideLabel,
    hasError,
    errorText,
    hint,
    isValid,
    onChange,
    validation,
    showValidation,
    message,
    ...rest
  } = props;

  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const isValidPassword = usePasswordValidation(
    password,
    validation?.minLength ?? 1,
    validation?.lowerCase,
    validation?.upperCase,
    validation?.number,
    validation?.specialCharacter
  );

  if (hint) {
    rest['aria-describedby'] = `${id}-hint`;
  }

  if (helperText) {
    rest['aria-describedby'] = `${id}-helper-text`;
  }

  if (hasError) {
    rest['aria-invalid'] = true;
    rest['aria-describedby'] = `${id}-error-text`;
  }

  return (
    <div className="sym-input-group my-2">
      {label && (
        <Label
          className="dark:text-white text-gray-900"
          id={id}
          text={label}
          required={required}
          hidden={hideLabel}
        />
      )}
      <div className="relative">
        <Input
          id={id}
          // This is neccessary to pass the ref to the input typescript gives a wrong type
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          type={showPassword ? 'text' : 'password'}
          ref={ref as Ref<HTMLInputElement>}
          className={clsx(
            'sm:text-sm rounded-lg block dark:bg-gray-700  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ',
            className
          )}
          required={required}
          disabled={disabled}
          readOnly={readOnly}
          hasError={hasError}
          isValid={isValid ?? (validation && isValidPassword.allValid)}
          showIconValid={false}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            if (onChange) {
              onChange(e);
            }
            setPassword(e.target.value);
          }}
          spellCheck="false"
          {...rest}
        />
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
          <button
            onClick={(e) => {
              e.preventDefault();
              setShowPassword(!showPassword);
            }}
          >
            <span className="sr-only">{showPassword ? 'Hide password' : 'Show password'}</span>
            <span className="icon">
              {showPassword ? (
                <EyeIcon className="h-5 w-5 text-gray-500" aria-hidden="true" />
              ) : (
                <EyeSlashIcon className="h-5 w-5 text-gray-300" aria-hidden="true" />
              )}
            </span>
          </button>
        </div>
      </div>
      <HelperText id={id} hasError={hasError}>
        {hasError ? errorText : helperText}
      </HelperText>
      {showValidation && (
        <ValidationList
          validation={validation}
          length={isValidPassword.length}
          lowerCase={isValidPassword.lowerCase}
          upperCase={isValidPassword.upperCase}
          number={isValidPassword.number}
          specialCharacter={isValidPassword.specialCharacter}
          allValid={isValidPassword.allValid}
          message={message}
        />
      )}
    </div>
  );
});

export default PasswordField;
