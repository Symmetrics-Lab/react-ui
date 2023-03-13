import { forwardRef } from 'react';
import clsx from 'clsx';
import { SelectProps } from './Select.types';
const baseSelectClass =
  'mt-1 block w-full rounded-md border-sym-border dark:border-sym-border-dark py-2 pl-3 pr-10 text-base focus:border-sym-primary dark:focus:border-sym-primary-dark focus:outline-none focus:ring-sym-primary dark:focus:ring-sym-primary-dark sm:text-sm bg-sym-input-bg dark:bg-sym-input-bg-dark placeholder-sym-placeholder dark:sym-placeholder-dark text-sym-txt-primary dark:text-sym-txt-primary-dark';

const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select(props, ref) {
  const {
    className,
    children,
    label,
    hasError,
    isValid,
    id,
    value,
    options,
    auxOption,
    disabled,
    ...rest
  } = props;

  const classes = clsx(baseSelectClass, disabled ? 'cursor-not-allowed' : null, className);

  return (
    <div>
      {label !== '' && (
        <label htmlFor={id} className="block text-sm font-medium dark:text-sym-txt-primary-dark text-sym-txt-primary">
          {label}
        </label>
      )}
      <select id={id} ref={ref} className={classes} value={value} disabled={disabled} {...rest}>
        <>
          {children}
          {options?.length > 0 &&
            options.map((option, i) => (
              <option key={i} value={option}>
                {option + ' ' + (auxOption || '') || ''}
              </option>
            ))}
        </>
      </select>
    </div>
  );
});
export default Select;
