import clsx from 'clsx';
import { forwardRef } from 'react';
import { CheckCircleIcon, ExclamationCircleIcon } from '@heroicons/react/20/solid';

import { InputProps } from './Input.types';
const baseInputClass =
  'sym-textfield__input block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm';
const disabledInputClass = 'cursor-not-allowed border-gray-200 bg-gray-50 text-gray-500';
const errorInputClass =
  'border-red-300 pr-10 text-red-900 placeholder-red-300 focus:border-red-500 focus:outline-none focus:ring-red-500';
const validInputClass =
  'border-green-300 pr-10 text-green-900 placeholder-green-300 focus:border-green-500 focus:outline-none focus:ring-green-500';
const wrapperIconInputClass = 'relative mt-1 rounded-md shadow-sm';

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(props, ref) {
  const { id, hasError, isValid, disabled, readOnly, className, required, type, ...rest } = props;

  const classes = clsx(
    baseInputClass,
    disabled || readOnly ? disabledInputClass : null,
    hasError ? errorInputClass : null,
    isValid ? validInputClass : null,
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
      {hasError && (
        <div className="sym-textfield__error-icon pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
        </div>
      )}
      {isValid && (
        <div className="sym-textfield__error-icon pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <CheckCircleIcon className="h-5 w-5 text-green-500" aria-hidden="true" />
        </div>
      )}
    </div>
  );
});

export default Input;
