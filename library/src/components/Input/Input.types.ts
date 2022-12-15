export interface InputProps extends React.HTMLProps<HTMLInputElement> {
  id: string;
  type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url';
  className?: string;
  hasError?: boolean;
  isValid?: boolean;
  showIconValid?: boolean;
}
