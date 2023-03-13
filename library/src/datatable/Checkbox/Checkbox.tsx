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
      <input
        type={'checkbox'}
        className={`w-4 h-4 
        text-sym-primary 
        dark:text-sym-primary-dark 
        rounded 
        border-sym-border 
        dark:border-sym-border-dark 
        dark:ring-offset-sym-primary 
        ring-offset-sym-primary-dark 
        focus:ring-2 
        focus:ring-sym-primary 
        dark:focus:focus:ring-sym-primary-dark`}
        ref={resolvedRef}
        {...rest}
      />
    </span>
  );
});
