export interface InputProps {
  type?: string;
  className?: string;
  placeholder?: string;
}
export interface TableFilterRowProps {
  propsInput?: InputProps;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  column: any;
}
