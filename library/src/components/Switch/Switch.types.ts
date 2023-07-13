import { AriaButtonProps } from 'react-aria';
import { ElementType } from 'react';
import * as React from 'react';
// data types for support with heroicons
type IconSVGProps = React.PropsWithoutRef<React.SVGProps<SVGSVGElement>> &
  React.RefAttributes<SVGSVGElement>;
type IconProps = IconSVGProps & {
  title?: string;
  titleId?: string;
};
type IconType =
  | string
  | React.FC<IconProps>; //data types for support with heroicons

export interface SwitchProps extends AriaButtonProps<ElementType> {
  id: string;
  key?: string;
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'primary' | 'secondary';
  disabled?: boolean;
  toggle?: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  iconLeft?: IconType;
  iconRight?: IconType;
}
