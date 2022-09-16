import { ReactNode } from 'react';

export interface LabelProps extends React.HTMLAttributes<HTMLLabelElement> {
  text: string;
  id: string;
  disabled?: boolean;
  required?: boolean;
  hint?: string | ReactNode;
  hidden?: boolean;
}
