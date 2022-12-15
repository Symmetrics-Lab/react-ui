import { createElement } from 'react';
import clsx from 'clsx';
import { ChipProps } from './Chip.types';
const baseChipClass = 'inline-flex rounded px-2 text-xs font-semibold leading-5 font-light';

export default function Chip(props: ChipProps) {
  const {
    className,
    icon,
    iconPosition = 'left',
    iconSize = 'md',
    children,
    variant = 'default',
    ...rest
  } = props;

  const leftIcon = {
    xs: `sym-btn-icon-left -ml-0.5 mr-2 h-4 w-4 text-gray-400 sm:text-sm ${
      variant === 'primary' ? 'text-white' : null
    } ${variant === 'secondary' ? 'text-secondary-600' : null}`,
    sm: `sym-btn-icon-left -ml-0.5 mr-2 h-4 w-4 text-gray-400 sm:text-sm ${
      variant === 'primary' ? 'text-white' : null
    } ${variant === 'secondary' ? 'text-secondary-600' : null}`,
    md: `sym-btn-icon-left -ml-1 mr-2 h-5 w-5 text-gray-400 sm:text-sm ${
      variant === 'primary' ? 'text-white' : null
    } ${variant === 'secondary' ? 'text-secondary-600' : null}`,
    lg: `sym-btn-icon-left -ml-1 mr-2 h-5 w-5 text-gray-400 sm:text-sm ${
      variant === 'primary' ? 'text-white' : null
    } ${variant === 'secondary' ? 'text-secondary-600' : null}`,
    xl: `sym-btn-icon-left -ml-1 mr-2 h-5 w-5 text-gray-400 sm:text-sm ${
      variant === 'primary' ? 'text-white' : null
    } ${variant === 'secondary' ? 'text-secondary-600' : null}`,
  };
  const rightIcon = {
    xs: `sym-btn-icon-right ml-2 -mr-0.5 h-4 w-4 text-gray-400 sm:text-sm ${
      variant === 'primary' ? 'text-white' : null
    } ${variant === 'secondary' ? 'text-secondary-600' : null}`,
    sm: `sym-btn-icon-right ml-2 -mr-0.5 h-4 w-4 text-gray-400 sm:text-sm ${
      variant === 'primary' ? 'text-white' : null
    } ${variant === 'secondary' ? 'text-secondary-600' : null}`,
    md: `sym-btn-icon-right ml-2 -mr-1 h-5 w-5 text-gray-400 sm:text-sm ${
      variant === 'primary' ? 'text-white' : null
    } ${variant === 'secondary' ? 'text-secondary-600' : null}`,
    lg: `sym-btn-icon-right ml-3 -mr-1 h-5 w-5 text-gray-400 sm:text-sm ${
      variant === 'primary' ? 'text-white' : null
    } ${variant === 'secondary' ? 'text-secondary-600' : null}`,
    xl: `sym-btn-icon-right ml-3 -mr-1 h-5 w-5 text-gray-400 sm:text-sm ${
      variant === 'primary' ? 'text-white' : null
    } ${variant === 'secondary' ? 'text-secondary-600' : null}`,
  };

  const classes = clsx(
    baseChipClass,
    icon && iconPosition === 'left' ? 'pl-8' : null,
    icon && iconPosition === 'right' ? 'pr-10' : null,
    variant === 'primary' ? 'bg-primary-500 text-white relative' : null,
    variant === 'secondary'
      ? 'bg-symlab-green-50 text-symlab-green-100 dark:bg-gray-700 dark:text-symlab-green-10 font-bold relative'
      : 'dark:bg-gray-700 dark:text-white',
    variant === 'default' ? 'bg-gray-100 text-symlab-gray-900 relative' : null,
    className
  );

  return (
    <div className="relative flex flex-grow items-stretch focus-within:z-10">
      <span className={classes} {...rest}>
        <>
          {icon && iconPosition === 'left' && (
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 mr-0">
              {createElement(icon, {
                className: leftIcon[iconSize],
                'aria-hidden': true,
              })}
            </div>
          )}
          {children}
          {icon && iconPosition === 'right' && (
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              {createElement(icon, {
                className: rightIcon[iconSize],
                'aria-hidden': true,
              })}
            </div>
          )}
        </>
      </span>
    </div>
  );
}
