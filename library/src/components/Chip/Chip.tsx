import { createElement } from 'react';
import clsx from 'clsx';
import { ChipProps } from './Chip.types';
const baseChipClass =
  'text-sym-txt-primary dark:text-sym-txt-primary-dark bg-sym-input-bg dark:bg-sym-input-bg-dark inline-flex rounded px-2 text-xs font-semibold leading-5 font-light';

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
    xs: `btn-icon-left -ml-0.5 mr-2 h-4 w-4 sm:text-sm ${
      variant === 'primary' ? '!text-sym-primary dark:text-sym-primary-dark' : null
    } ${variant === 'secondary' ? 'text-sym-green-100 dark:text-sym-success-dark' : null}`,
    sm: `btn-icon-left -ml-0.5 mr-2 h-4 w-4 text-sym-secondary-gray dark:text-sym-secondary-gray-dark sm:text-sm ${
      variant === 'primary' ? '!text-sym-primary dark:text-sym-primary-dark' : null
    } ${variant === 'secondary' ? 'text-sym-green-100 dark:text-sym-success-dark' : null}`,
    md: `btn-icon-left -ml-1 mr-2 h-5 w-5 text-sym-secondary-gray dark:text-sym-secondary-gray-dark sm:text-sm ${
      variant === 'primary' ? '!text-sym-primary dark:text-sym-primary-dark' : null
    } ${variant === 'secondary' ? 'text-sym-green-100 dark:text-sym-success-dark' : null}`,
    lg: `btn-icon-left -ml-1 mr-2 h-5 w-5 text-sym-secondary-gray dark:text-sym-secondary-gray-dark sm:text-sm ${
      variant === 'primary' ? '!text-sym-primary dark:text-sym-primary-dark' : null
    } ${variant === 'secondary' ? 'text-sym-green-100 dark:text-sym-success-dark' : null}`,
    xl: `btn-icon-left -ml-1 mr-2 h-5 w-5 text-sym-secondary-gray dark:text-sym-secondary-gray-dark sm:text-sm ${
      variant === 'primary' ? '!text-sym-primary dark:text-sym-primary-dark' : null
    } ${variant === 'secondary' ? 'text-sym-green-100 dark:text-sym-success-dark' : null}`,
  };
  const rightIcon = {
    xs: `btn-icon-right ml-2 -mr-0.5 h-4 w-4 text-sym-secondary-gray dark:text-sym-secondary-gray-dark sm:text-sm ${
      variant === 'primary' ? '!text-sym-primary dark:text-sym-primary-dark' : null
    } ${variant === 'secondary' ? 'text-sym-green-100 dark:text-sym-success-dark' : null}`,
    sm: `btn-icon-right ml-2 -mr-0.5 h-4 w-4 text-sym-secondary-gray dark:text-sym-secondary-gray-dark sm:text-sm ${
      variant === 'primary' ? '!text-sym-primary dark:text-sym-primary-dark' : null
    } ${variant === 'secondary' ? 'text-sym-green-100 dark:text-sym-success-dark' : null}`,
    md: `btn-icon-right ml-2 -mr-1 h-5 w-5 text-sym-secondary-gray dark:text-sym-secondary-gray-dark sm:text-sm ${
      variant === 'primary' ? '!text-sym-primary dark:text-sym-primary-dark' : null
    } ${variant === 'secondary' ? 'text-sym-green-100 dark:text-sym-success-dark' : null}`,
    lg: `btn-icon-right ml-3 -mr-1 h-5 w-5 text-sym-secondary-gray dark:text-sym-secondary-gray-dark sm:text-sm ${
      variant === 'primary' ? '!text-sym-primary dark:text-sym-primary-dark' : null
    } ${variant === 'secondary' ? 'text-sym-green-100 dark:text-sym-success-dark' : null}`,
    xl: `btn-icon-right ml-3 -mr-1 h-5 w-5 text-sym-secondary-gray dark:text-sym-secondary-gray-dark sm:text-sm ${
      variant === 'primary' ? '!text-sym-primary dark:text-sym-primary-dark' : null
    } ${variant === 'secondary' ? 'text-sym-green-100 dark:text-sym-success-dark' : null}`,
  };

  const classes = clsx(
    baseChipClass,
    icon && iconPosition === 'left' ? 'pl-8' : null,
    icon && iconPosition === 'right' ? 'pr-10' : null,
    variant === 'primary'
      ? 'bg-opacity-25 bg-sym-primary relative dark:text-sym-primary-dark'
      : null,
    variant === 'secondary'
      ? 'bg-sym-green-50 text-sym-green-100 dark:bg-sym-input-bg-dark dark:text-sym-success-dark font-bold relative'
      : null,
    variant === 'default' ? 'bg-sym-wallpaper dark:bg-sym-wallpaper-dark  relative' : null,
    className
  );

  return (
    <div className="relative flex flex-grow items-stretch focus-within:z-10">
      <span className={classes} {...rest}>
        <>
          {icon && iconPosition === 'left' && (
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 mr-0">
              <>{icon}</>
            </div>
          )}
          {children}
          {icon && iconPosition === 'right' && (
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <>{icon}</>
              {/*  {createElement(icon, {
                className: rightIcon[iconSize],
                'aria-hidden': true,
              })} */}
            </div>
          )}
        </>
      </span>
    </div>
  );
}
