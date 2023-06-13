import { AriaButtonProps } from 'react-aria';
import { ElementType } from 'react';
type IconType =
  | string
  | React.ForwardRefExoticComponent<
      React.PropsWithoutRef<React.SVGProps<SVGSVGElement>> & {
        title?: string;
        titleId?: string;
      } & React.RefAttributes<SVGSVGElement>
    >;
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
