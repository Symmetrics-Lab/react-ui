import { forwardRef, createElement } from 'react';
import { ButtonProps } from './Button.types';
import { getSizeClass, getVarianTheme, getIconClass } from './utils';

const baseClass =
  'inline-flex items-center  border border-transparent shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2';

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(props, ref) {
  const {
    className,
    disabled,
    icon,
    iconPosition,
    onClick,
    rounded,
    size,
    text,
    type,
    variant = 'primary',
    ...rest
  } = props;

  return (
    <button
      ref={ref}
      type={type || 'button'}
      disabled={disabled}
      className={`sym-button 
        ${baseClass} 
        ${getSizeClass(size)}
        ${getVarianTheme(variant)}
        ${rounded ? 'rounded-full' : ''}
        ${className}
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
      `}
      onClick={onClick}
      {...rest}
    >
      {iconPosition === 'left' &&
        icon &&
        createElement(icon, {
          className: getIconClass(size, iconPosition),
          'aria-hidden': true,
        })}
      <>
        {text}
        {iconPosition === 'right' &&
          icon &&
          createElement(icon, {
            className: getIconClass(size, iconPosition),
            'aria-hidden': true,
          })}
      </>
    </button>
  );
});

export default Button;
