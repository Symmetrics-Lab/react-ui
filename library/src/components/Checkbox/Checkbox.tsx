import clsx from 'clsx';
import { forwardRef } from 'react';
import { CheckboxProps } from './Checkbox.types';

const size = {
  xs: ['h-4 w-4', 'text-sm'],
  sm: ['h-6 w-6', 'text-lg'],
  md: ['h-8 w-8', 'text-xl'],
  lg: ['h-10 w-10', 'text-2xl'],
  xl: ['h-12 w-12', 'text-3xl'],
};

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(props, ref) {
  const {
    className,
    id,
    value,
    sizes = 'xs',
    variant = 'primary',
    disabled,
    required,
    checked,
    rounded = 'rounded',
    textPosition = 'right',
    showValue = true,
    ...rest
  } = props;

  const classes = clsx(
    'text-sym-primary dark:text-sym-primary-dark',
    size[sizes],
    rounded === 'rounded' ? 'rounded' : rounded === 'rounded-full' ? 'rounded-full' : null,
    variant === 'primary' ? ' border-sym-primary dark:border-sym-primary-dark  focus:ring-0' : null,
    variant === 'secondary' ? 'border-sym-green-100  focus:ring-0' : null,
    variant === 'default' ? 'border-gray-300 text-sym-txt-primary focus:ring-0' : null,
    disabled ? 'cursor-not-allowed' : null,
    className
  );
  const labelClass = clsx(
    'block text-sym-secondary-gray dark:text-sym-secondary-gray-dark',
    value && textPosition === 'left' ? 'mr-3' : null,
    value && textPosition === 'right' ? 'ml-3' : null,
    size[sizes][1]
  );

  return (
    <div className="flex items-center">
      {value && textPosition === 'left' && <div className={labelClass}>{value}</div>}

      <input
        id={id}
        ref={ref}
        disabled={disabled}
        required={required}
        checked={checked}
        type={'checkbox'}
        className={classes}
        {...rest}
      />
      {showValue && value && textPosition === 'right' && <div className={labelClass}>{value}</div>}
    </div>
  );
});
export default Checkbox;
