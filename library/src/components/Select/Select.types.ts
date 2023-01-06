export interface SelectProps extends React.HTMLProps<HTMLSelectElement> {
  id: string;
  label?: string;
  children?: React.ReactNode;
  className?: string;
  hasError?: boolean;
  isValid?: boolean;
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
  options: any[];
  value: string | ReadonlyArray<string> | number | undefined;
  auxOption?: string;
}
