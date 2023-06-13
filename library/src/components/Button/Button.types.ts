import { MouseEventHandler, ElementType } from 'react';
import { AriaButtonProps } from 'react-aria';

type IconType =
  | string
  | React.FunctionComponent<{ className: string; 'aria-hidden': boolean }>
  | React.ComponentClass<{ className: string; 'aria-hidden': boolean }>
  | React.ForwardRefExoticComponent<
      React.PropsWithoutRef<React.SVGProps<SVGSVGElement>> & {
        title?: string;
        titleId?: string;
      } & React.RefAttributes<SVGSVGElement>
    >;

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

interface ButtonPropsRequired extends ButtonPropsBase {
  isLoading: true;
  loadingContent: React.ReactNode;
}

interface ButtonPropsOptional extends Partial<ButtonPropsBase> {
  isLoading?: false;
  loadingContent?: never;
}

export type ButtonProps = ButtonPropsRequired | ButtonPropsOptional;
