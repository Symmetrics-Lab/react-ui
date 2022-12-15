import clsx from 'clsx';
import { forwardRef } from 'react';
import { SwitchProps } from './Switch.types';
import { useButton } from 'react-aria';
import { useObjectRef } from '@react-aria/utils';
const sizes = {
  xs: ['md:w-10 md:h-6 ', 'md:w-3 md:h-3 ', 'transform translate-x-4 '],
  sm: ['md:w-12 md:h-7 ', 'md:w-4 md:h-4 ', 'transform translate-x-6 '],
  md: ['md:w-14 md:h-8 ', 'md:w-5 md:h-5 ', 'transform translate-x-7 '],
  lg: ['md:w-20 md:h-9 ', 'md:w-5 md:h-5 ', 'transform translate-x-12 '],
  xl: ['md:w-24 md:h-10 ', 'md:w-6 md:h-6 ', 'transform translate-x-14 '],
};

const variants = {
  primary: 'bg-primary-500   focus:ring-primary-500',
  secondary: 'bg-secondary-500  focus:ring-secondary-500',
  default: 'bg-primary-300 focus:ring-primary-500 b-2 border-primary-700 ',
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
    ...rest
  } = props;

  const objRef = useObjectRef(ref);

  const { buttonProps } = useButton(rest, objRef);

  const toggleClass =
    'bg-white rounded-full shadow-md transform duration-300 ease-in-out ' + sizes[size][2];

  const buttonClass = 'flex items-center border-black-300 rounded-full p-1 ' + variants[variant];

  
  const classesBttn = clsx(
    'inline-flex items-center  border border-transparent shadow-sm focus:outline-none focus:ring-0',
    toggle
      ? buttonClass
      : ' flex items-center bg-white-500  border-4 border-gray-400 rounded-full p-1 ',
    sizes[size][0],
    disabled ? 'cursor-not-allowed' : null,
    className
  );
  const classesPoint = clsx(
    sizes[size][1],
    toggle ? toggleClass : 'bg-gray-300 rounded-full shadow-md transform duration-300 ease-in-out'
  );

  return (
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
  );
});
export default Switch;
