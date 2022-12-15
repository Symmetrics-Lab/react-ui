import React from 'react';
import { IconType } from '../Icon/Icon.types';

export interface ChipProps {
  key?: string;
  className?: string;
  icon?: IconType;
  iconPosition?: 'left' | 'right';
  iconSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'primary' | 'secondary';
  children: string | React.ReactNode;
}
