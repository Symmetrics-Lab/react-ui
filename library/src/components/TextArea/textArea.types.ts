import type { ReactNode } from 'react';
export interface TextareaProps extends React.HTMLProps<HTMLTextAreaElement> {
  id: string;
  hideLabel?: boolean;
  className?: string;
  hasError?: boolean;
  isValid?: boolean;
  children?: React.ReactNode;
  minRows?: number;
  errorText?: string | ReactNode;
  helperText?: string | ReactNode;
}
