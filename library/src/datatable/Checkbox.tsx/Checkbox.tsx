import { forwardRef, useEffect, useRef } from 'react';
import { InputProps } from './Checkbox.types';

export const Checkbox = forwardRef<HTMLInputElement, InputProps>(function Checkbox(
  props,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: any
) {
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
