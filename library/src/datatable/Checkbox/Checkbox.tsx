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
        className={`w-4 h-4 text-blue-600 bg-white rounded border-gray-400 dark:border-gray-600 focus:ring-blue-500 dark:ring-offset-gray-800 focus:ring-2  dark:focus:ring-blue-600`}
        ref={resolvedRef}
        {...rest}
      />
    </span>
  );
});
