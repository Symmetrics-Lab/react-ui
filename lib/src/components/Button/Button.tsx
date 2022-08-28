import React, { FC } from 'react';
import { ButtonProps } from './Button.types';

const baseClass =
  'inline-flex items-center  border border-transparent shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2';
const xsClass = 'px-2.5 py-1.5 text-xs font-medium rounded';
const smClass = 'px-3 py-2 text-sm leading-4 font-medium rounded';
const mdClass = 'px-4 py-2 text-sm font-medium rounded-md';
const lgClass = 'px-4 py-2 text-base font-medium rounded-md';
const xlClass = 'px-6 py-3 border text-base rounded-md';
const primaryColor = 'text-primaryText bg-primary-600 hover:bg-primary-700  focus:ring-primary-500';
const secondaryColor =
  'text-primary-700 bg-primary-100 hover:bg-primary-200 focus:ring-primary-500';
const outlineColor = 'text-gray-700 bg-white hover:bg-gray-50 focus:ring-primary-500';

const getSizeClass = (size: ButtonProps['size']) => {
  switch (size) {
    case 'xs':
      return xsClass;
    case 'sm':
      return smClass;
    case 'md':
      return mdClass;
    case 'lg':
      return lgClass;
    case 'xl':
      return xlClass;
    default:
      return mdClass;
  }
};

const getVarianTheme = (variant: ButtonProps['variant']) => {
  switch (variant) {
    case 'primary':
      return primaryColor;
    case 'secondary':
      return secondaryColor;
    case 'outline':
      return outlineColor;
    default:
      return primaryColor;
  }
};

const getIconClass = (size: ButtonProps['size'], iconPosition: ButtonProps['iconPosition']) => {
  if (iconPosition === 'left') {
    switch (size) {
      case 'xs':
      case 'sm':
        return '-ml-0.5 mr-2 h-4 w-4';
      case 'md':
        return '-ml-1 mr-2 h-5 w-5';
      case 'lg':
      case 'xl':
        return '-ml-1 mr-3 h-5 w-5';
      default:
        return '-ml-1 mr-2 h-5 w-5';
    }
  }
  switch (size) {
    case 'xs':
    case 'sm':
      return 'ml-2 -mr-0.5 h-4 w-4';
    case 'md':
      return 'ml-2 -mr-1 h-5 w-5';
    case 'lg':
    case 'xl':
      return 'ml-3 -mr-1 h-5 w-5';
    default:
      return 'ml-2 -mr-1 h-5 w-5';
  }
};

const Button: FC<ButtonProps> = ({
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
  ...props
}) => {
  return (
    <button
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
      {...props}
    >
      {iconPosition === 'left' &&
        icon &&
        React.createElement(icon, {
          className: getIconClass(size, iconPosition),
          'aria-hidden': true,
        })}
      <>
        {text}
        {iconPosition === 'right' &&
          icon &&
          React.createElement(icon, {
            className: getIconClass(size, iconPosition),
            'aria-hidden': true,
          })}
      </>
    </button>
  );
};

export default Button;
