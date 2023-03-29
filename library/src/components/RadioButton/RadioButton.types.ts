import React from 'react';
export interface RadioButtonProps  extends React.HTMLProps<HTMLInputElement> {
  key?: string;
  className?: string;
  label?: string;
  sizes?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'primary' | 'secondary';
  disabled?: boolean;
  checked?: boolean;
}