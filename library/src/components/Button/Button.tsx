import { createElement, forwardRef } from 'react';
import clsx from 'clsx';
import { useButton } from 'react-aria';
import { useObjectRef } from '@react-aria/utils';

import { ButtonProps } from './Button.types';

const baseClass =
  'inline-flex items-center border border-transparent shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 hover:bg-opacity-75';

const sizes = {
  xs: 'px-2.5 py-1.5 text-xs font-medium rounded',
  sm: 'px-3 py-2 text-sm leading-4 font-medium rounded',
  md: 'px-4 py-2 text-sm font-medium rounded-md',
  lg: 'px-4 py-2 text-base font-medium rounded-md',
  xl: 'px-6 py-3 border text-base rounded-md',
};

const variants = {
  primary: 'text-sym-btn-txt bg-sym-primary focus:ring-sym-primary',
  secondary: 'text-sym-btn-txt bg-sym-green-100 focus:ring-sym-green-100',
  outline:
    'text-sym-txt-primary dark:text-sym-txt-primary-dark bg-sym-layout dark:bg-sym-layout-dark hover:bg-sym-wallpaper dark:hover:bg-sym-wallpaper-dark',
};

const leftIcon = {
  xs: 'btn-icon-left -ml-0.5 mr-2 h-4 w-4',
  sm: 'btn-icon-left -ml-0.5 mr-2 h-4 w-4',
  md: 'btn-icon-left -ml-1 mr-2 h-5 w-5',
  lg: 'btn-icon-left -ml-1 mr-3 h-5 w-5',
  xl: 'btn-icon-left -ml-1 mr-3 h-5 w-5',
};

const rightIcon = {
  xs: 'btn-icon-right ml-2 -mr-0.5 h-4 w-4',
  sm: 'btn-icon-right ml-2 -mr-0.5 h-4 w-4',
  md: 'btn-icon-right ml-2 -mr-1 h-5 w-5',
  lg: 'btn-icon-right ml-3 -mr-1 h-5 w-5',
  xl: 'btn-icon-right ml-3 -mr-1 h-5 w-5',
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
    isLoading,
    loadingContent,
    ...rest
  } = props;

  const objRef = useObjectRef(ref);

  const { buttonProps } = useButton(rest, objRef);

  const classes = clsx(
    'btn',
    'inline-flex',
    'items-center',
    'justify-center',
    baseClass,
    sizes[size],
    variants[variant],
    rounded ? 'rounded-full' : null,
    disabled || isDisabled || isLoading ? 'opacity-50 cursor-not-allowed' : null,
    className
  );
  return (
    <button
      ref={ref}
      {...buttonProps}
      type={type || 'button'}
      disabled={(disabled || isDisabled || isLoading) === true}
      className={classes}
      onClick={onClick}
    >
      <>{(iconPosition === 'left' || !iconPosition) && icon && { icon }}</>
      <>
        {isLoading ? loadingContent : children}
        {iconPosition === 'right' && icon && { icon }}
      </>
    </button>
  );
});

export default Button;
