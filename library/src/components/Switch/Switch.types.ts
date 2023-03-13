import { AriaButtonProps } from 'react-aria';
import { ElementType } from 'react';
type IconType =
  | string
  | React.FunctionComponent<{ className: string; 'aria-hidden': boolean }>
  | React.ComponentClass<{ className: string; 'aria-hidden': boolean }>;
export interface SwitchProps extends AriaButtonProps<ElementType> {
  id: string;
  key?: string;
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'primary' | 'secondary';
  disabled?: boolean;
  toggle?: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>
  iconLeft?: IconType;
  iconRight?: IconType;
}