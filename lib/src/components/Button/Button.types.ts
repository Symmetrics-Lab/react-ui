import { MouseEventHandler, HTMLAttributes } from 'react';
export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  text?: string;
  className?: string;

  type?: 'button' | 'submit' | 'reset';
  primary?: boolean;
  disabled?: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
