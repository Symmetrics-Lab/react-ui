import React, { FC } from 'react';
import { ButtonProps } from './Button.types';

const baseClass =
  'inline-flex items-center px-2.5 py-1.5 border border-transparent rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2';
const xsClass = 'text-xs font-medium';
const defaultColor = 'text-white bg-indigo-600 hover:bg-indigo-700  focus:ring-indigo-500';

const Button: FC<ButtonProps> = ({ className, type, disabled, text, onClick, ...props }) => {
  return (
    <button
      type={type || 'button'}
      disabled={disabled}
      className={`${baseClass} ${xsClass} ${defaultColor} ${className}`}
      onClick={onClick}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
