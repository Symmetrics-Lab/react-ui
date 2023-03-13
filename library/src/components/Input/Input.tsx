import clsx from 'clsx';
import { forwardRef } from 'react';
import { CheckCircleIcon, ExclamationCircleIcon } from '@heroicons/react/20/solid';

import { InputProps } from './Input.types';
const baseInputClass =
  'textfield__input block w-full rounded-md shadow-sm focus:border-sym-primary dark:focus:border-sym-primary-dark focus:ring-sym-primary dark:focus:ring-sym-primary-dark sm:text-sm';
const disabledInputClass = 'cursor-not-allowed bg-sym-wallpaper dark:bg-sym-wallpaper-dark text-sym-disabled dark:text-sym-disabled-dark';
const errorInputClass =
  'border-sym-error dark:border-sym-error-dark pr-10 focus:border-sym-error-dark focus:outline-none focus:ring-sym-error dark:focus:ring-sym-error-dark ';
const validInputClass =
  '!border-sym-success dark:!border-sym-success-dark pr-10 focus:border-sym-success dark:focus:border-sym-success-dark focus:outline-none focus:ring-sym-success dark:focus:ring-sym-success-dark';
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
    (!hasError && !isValid) && 'border-sym-input-border dark:border-sym-input-border-dark',
    className
  );

  const wrapperClasses = clsx(
    'textfield__wrapper mt-1',
    hasError ? `textfield__wrapper--error ${wrapperIconInputClass}` : null,
    isValid ? `textfield__wrapper--valid ${wrapperIconInputClass}` : null
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
        <div className="textfield__error-icon pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <ExclamationCircleIcon className="h-5 w-5 text-sym-error dark:text-sym-error-dark" aria-hidden="true" />
        </div>
      )}
      {isValid && showIconValid && (
        <div className="textfield__error-icon pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <CheckCircleIcon
            className="h-5 w-5 text-sym-success dark:text-sym-success-dark"
            aria-hidden="true"
          />
        </div>
      )}
    </div>
  );
});

export default Input;
