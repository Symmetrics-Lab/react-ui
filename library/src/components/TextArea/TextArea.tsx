import clsx from 'clsx';
import { forwardRef } from 'react';
import { CheckCircleIcon, ExclamationCircleIcon } from '@heroicons/react/20/solid';
import HelperText from '../HelperText/HelperText';
import { TextareaProps } from './textArea.types';
import Label from '../Label';
const baseInputClass =
  'sym-textfield__input block w-full rounded-md border-sym-input-border  dark:border-sym-input-border-dark shadow-sm  dark:focus:border-sym-primary-dark focus:border-sym-primary focus:ring-sym-primary dark:focus:ring-sym-primary-dark sm:text-sm placeholder-sym-placeholder dark:placeholder-sym-placeholder-dark text-sym-txt-primary dark:text-sym-txt-primary-dark bg-sym-input-bg dark:bg-sym-input-bg-dark';
const disabledInputClass = 'cursor-not-allowed bg-sym-wallpaper dark:bg-sym-wallpaper-dark text-sym-disabled dark:text-sym-disabled-dark';
const errorInputClass =
  'border-sym-error dark:border-sym-error-dark pr-10 dark:placeholder-sym-error-dark focus:border-sym-error dark:focus:border-sym-error-dark focus:outline-none focus:ring-error dark:focus:ring-error-dark';
const validInputClass =
  'border-sym-sucess dark:border-sym-sucess-dark pr-10  dark:text-sym-success-dark text-sym-success focus:border-sym-success focus:outline-none focus:ring-sym-success dark:focus:ring-sym-success-dark';
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
          className="dark:text-sym-txt-primary-dark text-sym-txt-primary"
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
          <ExclamationCircleIcon className="h-5 w-5 dark:text-sym-error-dark text-sym-error" aria-hidden="true" />
        </div>
      )}
      {isValid && (
        <div className="-textfield__error-icon pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <CheckCircleIcon className="h-5 w-5 text-sym-success dark:text-sym-success-dark" aria-hidden="true" />
        </div>
      )}
      <HelperText
        id={id}
        hasError={hasError}
        className={`mt-0 ${hasError ? 'text-sym-error dark:text-sym-error-dark' : ''}`}
      >
        {hasError ? errorText : helperText}
      </HelperText>
    </div>
  );
});

export default Textarea;
