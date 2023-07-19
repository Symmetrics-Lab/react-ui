import { MouseEventHandler, ElementType } from 'react';
import { AriaButtonProps } from 'react-aria';

// data types for support with heroicons
type IconSVGProps = React.PropsWithoutRef<React.SVGProps<SVGSVGElement>> &
  React.RefAttributes<SVGSVGElement>;
type IconProps = IconSVGProps & {
  title?: string;
  titleId?: string;
};
type IconType =
  | string
  //| React.FunctionComponent<{ className: string; 'aria-hidden': boolean }>
  //| React.ComponentClass<{ className: string; 'aria-hidden': boolean }>
  | React.FC<IconProps> //data types for support with heroicons
  //| React.ReactNode

interface ButtonPropsBase extends AriaButtonProps<ElementType> {
  className?: string;
  children?: React.ReactNode;
  disabled?: boolean;
  icon?: IconType;
  iconPosition?: 'left' | 'right';
  onClick?: MouseEventHandler<HTMLButtonElement>;
  rounded?: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'outline';
}

export interface ButtonPropsRequired extends ButtonPropsBase {
  isLoading: true;
  loadingContent: React.ReactNode;
}

export interface ButtonPropsOptional extends Partial<ButtonPropsBase> {
  isLoading?: false;
  loadingContent?: never;
}


export type ButtonProps = ButtonPropsRequired | ButtonPropsOptional;
