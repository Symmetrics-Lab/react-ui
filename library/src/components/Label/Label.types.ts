export interface LabelProps extends React.HTMLAttributes<HTMLLabelElement> {
  text: string;
  check?: boolean;
  radio?: boolean;
  disabled?: boolean;
}
