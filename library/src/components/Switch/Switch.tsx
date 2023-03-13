import clsx from 'clsx';
import { forwardRef, createElement } from 'react';
import { SwitchProps } from './Switch.types';
import { useButton } from 'react-aria';
import { useObjectRef } from '@react-aria/utils';
const sizes = {
  xs: ['w-10 h-6 ', 'w-3 h-3 ', 'transform translate-x-4 '],
  sm: ['w-12 h-7 ', 'w-4 h-4 ', 'transform translate-x-6 '],
  md: ['w-14 h-8 ', 'w-5 h-5 ', 'transform translate-x-7 '],
  lg: ['w-20 h-9 ', 'w-5 h-5 ', 'transform translate-x-12 '],
  xl: ['w-24 h-10 ', 'w-6 h-6 ', 'transform translate-x-14 '],
};

const variants = {
  primary: 'bg-sym-primary focus:ring-sym-primary dark:bg-sym-primary-dark focus:ring-sym-primary-dark',
  secondary: 'bg-sym-green-100  focus:ring-sym-green-100',
  default: 'bg-purple-300 focus:ring-purple-300 b-2 border-purple-300 ',
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

const Switch = forwardRef<HTMLButtonElement, SwitchProps>(function Switch(props, ref) {
  const {
    className,
    toggle,
    onClick,
    id,
    size = 'xs',
    variant = 'primary',
    disabled,
    iconLeft,
    iconRight,
    ...rest
  } = props;

  const objRef = useObjectRef(ref);

  const { buttonProps } = useButton(rest, objRef);

  const toggleClass =
    'bg-sym-layout rounded-full shadow-md transform duration-300 sym-ease-in-out ' + sizes[size][2];

  const buttonClass = 'flex items-center border-black-300 rounded-full p-1 ' + variants[variant];

  
  const classesBttn = clsx(
    'inline-flex items-center border border-transparent shadow-sm focus:outline-none focus:ring-0',
    toggle
      ? buttonClass
      : ' flex items-center bg-sym-layout  border-4 border-gray-400 rounded-full p-1 ',
    sizes[size][0],
    disabled ? 'cursor-not-allowed' : null,
    className
  );
  const classesPoint = clsx(
    sizes[size][1],
    toggle ? toggleClass : 'bg-gray-300 rounded-full shadow-md transform duration-300 ease-in-out'
  );

  return (
  <div className='flex items-center'>
    {(iconLeft)  &&
    createElement(iconLeft, {
      className: leftIcon[size],
      'aria-hidden': true,
    })}
    <button
      id={id}
      ref={ref}
      {...buttonProps}
      disabled={disabled}
      className={classesBttn}
      onClick={onClick}
    >
      {/* Switch */}
      <div className={classesPoint}></div>
    </button>
    <>
        {iconRight  &&
          createElement(iconRight, {
            className: rightIcon[size],
            'aria-hidden': true,
          })}
      </>
  </div>
  );
});
export default Switch;
