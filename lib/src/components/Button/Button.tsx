import { forwardRef, createElement } from 'react';
import clsx from 'clsx';
import { useButton } from 'react-aria';
import { useObjectRef } from '@react-aria/utils';

import { ButtonProps } from './Button.types';

const baseClass =
  'inline-flex items-center  border border-transparent shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2';

const sizes = {
  xs: 'px-2.5 py-1.5 text-xs font-medium rounded',
  sm: 'px-3 py-2 text-sm leading-4 font-medium rounded',
  md: 'px-4 py-2 text-sm font-medium rounded-md',
  lg: 'px-4 py-2 text-base font-medium rounded-md',
  xl: 'px-6 py-3 border text-base rounded-md',
};

const variants = {
  primary: 'text-primaryText bg-primary-600 hover:bg-primary-700  focus:ring-primary-500',
  secondary: 'text-primary-700 bg-primary-100 hover:bg-primary-200 focus:ring-primary-500',
  outline: 'text-gray-700 bg-white hover:bg-gray-50 focus:ring-primary-500',
};

const leftIcon = {
  xs: 'sym-btn-icon-left -ml-0.5 mr-2 h-4 w-4',
  sm: 'sym-btn-icon-left -ml-0.5 mr-2 h-4 w-4',
  md: 'sym-btn-icon-left -ml-1 mr-2 h-5 w-5',
  lg: 'sym-btn-icon-left -ml-1 mr-3 h-5 w-5',
  xl: 'sym-btn-icon-left -ml-1 mr-3 h-5 w-5',
};

const rightIcon = {
  xs: 'sym-btn-icon-right ml-2 -mr-0.5 h-4 w-4',
  sm: 'sym-btn-icon-right ml-2 -mr-0.5 h-4 w-4',
  md: 'sym-btn-icon-right ml-2 -mr-1 h-5 w-5',
  lg: 'sym-btn-icon-right ml-3 -mr-1 h-5 w-5',
  xl: 'sym-btn-icon-right ml-3 -mr-1 h-5 w-5',
};
const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(props, ref) {
  const {
    className,
    children,
    disabled,
    icon,
    iconPosition,
    onClick,
    rounded,
    size = 'md',
    type,
    variant = 'primary',
    isDisabled,
    ...rest
  } = props;

  const objRef = useObjectRef(ref);

  const { buttonProps } = useButton(rest, objRef);

  const classes = clsx(
    'sym-btn',
    baseClass,
    sizes[size],
    variants[variant],
    rounded ? 'rounded-full' : null,
    disabled || isDisabled ? 'opacity-50 cursor-not-allowed' : null,
    className
  );
  return (
    <button
      ref={ref}
      {...buttonProps}
      type={type || 'button'}
      disabled={(disabled || isDisabled) === true}
      className={classes}
      onClick={onClick}
    >
      {(iconPosition === 'left' || !iconPosition) &&
        icon &&
        createElement(icon, {
          className: leftIcon[size],
          'aria-hidden': true,
        })}
      <>
        {children}
        {iconPosition === 'right' &&
          icon &&
          createElement(icon, {
            className: rightIcon[size],
            'aria-hidden': true,
          })}
      </>
    </button>
  );
});

export default Button;
