import clsx from 'clsx';
import { forwardRef } from 'react';
import { CheckCircleIcon, ExclamationCircleIcon } from '@heroicons/react/20/solid';

import { InputProps } from './Input.types';
const baseInputClass =
  'sym-textfield__input block w-full rounded-md shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm';
const disabledInputClass = 'cursor-not-allowed border-gray-200 bg-gray-50 text-gray-500';
const errorInputClass =
  'border-red-300 dark:border-red-500 pr-10 focus:border-red-500 focus:outline-none focus:ring-red-500';
const validInputClass =
  'border-green-300 dark:border-symlab-green-10 pr-10 focus:border-green-500 focus:outline-none focus:ring-green-500';
const wrapperIconInputClass = 'relative mt-1 rounded-md shadow-sm';

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(props, ref) {
  const {
    id,
    hasError,
    isValid,
    disabled,
    readOnly,
    className,
    required,
    type,
    showIconValid = true,
    ...rest
  } = props;

  const classes = clsx(
    baseInputClass,
    disabled || readOnly ? disabledInputClass : null,
    hasError ? errorInputClass : null,
    isValid ? validInputClass : null,
    (!hasError && !isValid) && 'dark:border-gray-600 border border-gray-300 ',
    className
  );

  const wrapperClasses = clsx(
    'sym-textfield__wrapper mt-1',
    hasError ? `sym-textfield__wrapper--error ${wrapperIconInputClass}` : null,
    isValid ? `sym-textfield__wrapper--valid ${wrapperIconInputClass}` : null
  );
  return (
    <div className={wrapperClasses}>
      <input
        ref={ref}
        id={id}
        type={type || 'text'}
        className={classes}
        required={required}
        disabled={disabled}
        readOnly={readOnly}
        {...rest}
      />
      {hasError && showIconValid && (
        <div className="sym-textfield__error-icon pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
        </div>
      )}
      {isValid && showIconValid && (
        <div className="sym-textfield__error-icon pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <CheckCircleIcon
            className="h-5 w-5 text-green-500 dark:text-symlab-green-10"
            aria-hidden="true"
          />
        </div>
      )}
    </div>
  );
});

export default Input;
