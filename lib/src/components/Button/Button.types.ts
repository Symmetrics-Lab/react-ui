import { MouseEventHandler, ElementType } from 'react';
import { AriaButtonProps } from 'react-aria';

type IconType =
  | string
  | React.FunctionComponent<{ className: string; 'aria-hidden': boolean }>
  | React.ComponentClass<{ className: string; 'aria-hidden': boolean }>;

export interface ButtonProps extends AriaButtonProps<ElementType> {
  className?: string;
  disabled?: boolean;
  icon?: IconType;
  iconPosition?: 'left' | 'right';
  onClick?: MouseEventHandler<HTMLButtonElement>;
  rounded?: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  text?: string;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'outline';
}
