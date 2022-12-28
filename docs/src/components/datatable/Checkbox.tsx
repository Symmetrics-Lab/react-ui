import React, { forwardRef, useEffect, useRef } from 'react';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface InputProps extends React.HTMLProps<any> {
  className?: string;
  indeterminate?: boolean;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Checkbox = forwardRef<HTMLInputElement, InputProps>(function Checkbox(props, ref: any) {
  const { indeterminate, ...rest } = props;
  const resolvedRef = ref?.indeterminate || useRef();

  useEffect(() => {
    resolvedRef.current.indeterminate = indeterminate;
  }, [resolvedRef, indeterminate]);

  return (
    <span>
      <input type={'checkbox'} ref={resolvedRef} {...rest} />
    </span>
  );
});
