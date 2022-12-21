import type { ReactNode } from 'react';

export interface PasswordFieldProps extends React.HTMLProps<HTMLInputElement> {
  label: string;
  id: string;
  className?: string;
  helperText?: string | ReactNode;
  hideLabel?: boolean;
  hasError?: boolean;
  isValid?: boolean;
  errorText?: string | ReactNode;
  hint?: string | ReactNode;
  ref?: React.Ref<HTMLInputElement>;
  validation?: {
    minLength?: number;
    lowerCase?: boolean;
    upperCase?: boolean;
    number?: boolean;
    specialCharacter?: boolean;
  };
  showValidation?: boolean;
  message?: string;
}
