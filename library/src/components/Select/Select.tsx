import { forwardRef } from 'react';
import clsx from 'clsx';
import { SelectProps } from './Select.types';
const baseSelectClass =
  'mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-primary-500 focus:outline-none focus:ring-primary-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500';

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
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 dark:text-gray-400">
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
