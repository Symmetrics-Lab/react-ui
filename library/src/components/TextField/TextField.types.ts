import type { ReactNode } from 'react';

export interface TextFieldProps extends React.HTMLProps<HTMLInputElement> {
  label: string;
  id: string;
  type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url';
  className?: string;
  helperText?: string | ReactNode;
  hideLabel?: boolean;
  hasError?: boolean;
  isValid?: boolean;
  errorText?: string | ReactNode;
  hint?: string | ReactNode;
  ref?: React.Ref<HTMLInputElement>;
}
