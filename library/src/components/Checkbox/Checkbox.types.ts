import React from 'react';
export interface CheckboxProps  extends React.HTMLProps<HTMLInputElement> {
  id: string;
  key?: string;
  className?: string;
  textPosition?: 'left' | 'right';
  sizes?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'primary' | 'secondary';
  disabled?: boolean;
  required?: boolean;
  rounded?: 'rounded-full' | 'rounded' | null;
  checked?: boolean;
  value?: string;
}
