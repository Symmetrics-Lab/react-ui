// Generate the typescript interface for the input component

import { CheckCircleIcon, ExclamationCircleIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';

import { forwardRef } from 'react';

import { TextFieldProps } from './TextField.types';

const baseInputClass =
  'sym-textfield__input block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm';
const disabledInputClass = 'cursor-not-allowed border-gray-200 bg-gray-50 text-gray-500';
const errorInputClass =
  'border-red-300 pr-10 text-red-900 placeholder-red-300 focus:border-red-500 focus:outline-none focus:ring-red-500';
const validInputClass =
  'border-green-300 pr-10 text-green-900 placeholder-green-300 focus:border-green-500 focus:outline-none focus:ring-green-500';
const wrapperIconInputClass = 'relative mt-1 rounded-md shadow-sm';
const baseLabelClass = 'sym-textfield__label block text-sm font-medium text-gray-700';
const baseHelperText = 'sym-textfield__helper-text mt-2 text-sm text-gray-500';

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(function Input(props, ref) {
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
    ...rest
  } = props;

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

  const classesLabel = clsx(baseLabelClass, hideLabel ? 'sr-only' : null);
  return (
    <div className="sym-input-group my-2">
      <div className="flex justify-between">
        <label className={classesLabel} htmlFor={id}>
          <span>{label}</span>{' '}
          {required && (
            <span className="sym-textfield__required_label text-red-700" aria-label="required">
              *
            </span>
          )}
        </label>
        {hint && (
          <span className="sym-textfield__hint text-sm text-gray-500" id={`${id}-hint`}>
            {hint}
          </span>
        )}
      </div>
      <div className={wrapperClasses}>
        <input
          ref={ref}
          id={id}
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
      {helperText && !hasError && (
        <p className={baseHelperText} id={`${id}-helper-text`}>
          {helperText}
        </p>
      )}
      {errorText && (
        <p className={clsx(baseHelperText, 'text-red-700')} id={`${id}-error-text`}>
          {errorText}
        </p>
      )}
    </div>
  );
});

export default TextField;
