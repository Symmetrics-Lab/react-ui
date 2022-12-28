import clsx from 'clsx';
import { forwardRef } from 'react';
import { CheckCircleIcon, ExclamationCircleIcon } from '@heroicons/react/20/solid';
import HelperText from '../HelperText/HelperText';
import { TextareaProps } from './textArea.types';
import Label from '../Label';
const baseInputClass =
  'sym-textfield__input block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm placeholder-gray-400 dark:text-white dark:bg-gray-700';
const disabledInputClass = 'cursor-not-allowed border-gray-200 bg-gray-50 text-gray-500';
const errorInputClass =
  'border-symlab-red-300 pr-10 text-symlab-red-700 placeholder-symlab-red-300 focus:border-symlab-red-500 focus:outline-none focus:ring-symlab-red-500';
const validInputClass =
  'border-green-300 pr-10 text-green-900 focus:border-green-500 focus:outline-none focus:ring-green-500';
const wrapperIconInputClass = 'relative mt-1 rounded-md shadow-sm';

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(props, ref) {
  const {
    id,
    label,
    hideLabel,
    hasError,
    helperText,
    errorText,
    isValid,
    disabled,
    readOnly,
    className,
    required,
    children,
    rows,
    minRows = 3,
    ...rest
  } = props;

  const classes = clsx(
    baseInputClass,
    disabled || readOnly ? disabledInputClass : null,
    hasError ? errorInputClass : null,
    isValid ? validInputClass : null,
    className
  );
  if (helperText) {
    rest['aria-describedby'] = `${id}-helper-text`;
  }

  if (hasError) {
    rest['aria-invalid'] = true;
    rest['aria-describedby'] = `${id}-error-text`;
  }

  const wrapperClasses = clsx(
    'sym-textfield__wrapper mt-1',
    hasError ? `sym-textfield__wrapper--error ${wrapperIconInputClass}` : null,
    isValid ? `sym-textfield__wrapper--valid ${wrapperIconInputClass}` : null
  );
  return (
    <div className={wrapperClasses}>
      {label && (
        <Label
          className="dark:text-white text-gray-900"
          id={id}
          text={label}
          required={required}
          hidden={hideLabel}
        />
      )}
      <textarea
        ref={ref}
        id={id}
        className={classes}
        required={required}
        disabled={disabled}
        readOnly={readOnly}
        rows={rows || minRows}
        {...rest}
      ></textarea>
      {hasError && (
        <div className="sym-textfield__error-icon pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <ExclamationCircleIcon className="h-5 w-5 text-symlab-red-500" aria-hidden="true" />
        </div>
      )}
      {isValid && (
        <div className="sym-textfield__error-icon pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <CheckCircleIcon className="h-5 w-5 text-green-500" aria-hidden="true" />
        </div>
      )}
      <HelperText
        id={id}
        hasError={hasError}
        className={`mt-0 ${hasError ? 'text-symlab-red-300' : ''}`}
      >
        {hasError ? errorText : helperText}
      </HelperText>
    </div>
  );
});

export default Textarea;
