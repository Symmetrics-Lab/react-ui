import clsx from 'clsx';
import { forwardRef } from 'react';
import { RadioButtonProps } from './RadioButton.types';

const size = {
  xs: ['h-4 w-4', 'text-sm'],
  sm: ['h-6 w-6', 'text-lg'],
  md: ['h-8 w-8', 'text-xl'],
  lg: ['h-10 w-10', 'text-2xl'],
  xl: ['h-12 w-12', 'text-3xl'],
};

const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(function RadioButton(
  props,
  ref
) {
  const {
    id,
    className,
    sizes = 'xs',
    variant = 'primary',
    disabled,
    checked,
    label='',
    ...rest
  } = props;

  const classes = clsx(
    'border-sym-border dark:border-sym-border-dark',
    size[sizes][0],
    variant === 'primary'
      ? ' border-sym-border dark:border-sym-border-dark text-sym-primary dark:text-sym-primary-dark focus:ring-0'
      : null,
    variant === 'secondary'
      ? 'border-sym-border dark:border-sym-border-dark text-sym-secondary-green dark:text-sym-secondary-green-dark focus:ring-0'
      : null,
    variant === 'default'
      ? 'border-sym-border dark:border-sym-border-dark text-sym-txt-secondary dark:text-sym-txt-secondary-dark focus:ring-0'
      : null,
    disabled ? 'cursor-not-allowed' : null,
    className
  );

  const labelClass = clsx('ml-3 block text-sym-secondary-gray dark:text-sym-secondary-gray-dark', size[sizes][1]);

  return (
    <div className="flex items-center">
      <input
        id={id}
        ref={ref}
        type={'radio'}
        {...rest}
        checked={checked}
        disabled={disabled}
        className={classes}
      />
      {label !== '' && (
        <label htmlFor="push-everything" className={labelClass}>
          {label}
        </label>
      )}
    </div>
  );
});
export default RadioButton;
