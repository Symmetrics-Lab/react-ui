import React, { FC } from 'react';
import { ButtonProps } from './Button.types';

const baseClass =
  'inline-flex items-center  border border-transparent shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2';
const xsClass = 'px-2.5 py-1.5 text-xs font-medium rounded';
const smClass = 'px-3 py-2 text-sm leading-4 font-medium rounded';
const mdClass = 'px-4 py-2 text-sm font-medium rounded-md';
const lgClass = 'px-4 py-2 text-base font-medium rounded-md';
const xlClass = 'px-6 py-3 border text-base rounded-md';
const defaultColor = 'text-white bg-indigo-600 hover:bg-indigo-700  focus:ring-indigo-500';

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

const Button: FC<ButtonProps> = ({ className, type, disabled, text, onClick, size, ...props }) => {
  return (
    <button
      type={type || 'button'}
      disabled={disabled}
      className={`sym-button 
        ${baseClass} 
        ${getSizeClass(size)}
        ${defaultColor}
        ${className}
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
      `}
      onClick={onClick}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
