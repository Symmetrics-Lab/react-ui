import clsx from 'clsx';
import { forwardRef } from 'react';
import { LabelProps } from './Label.types';

const baseClass = 'sym-label block text-sm font-medium text-gray-700';

const Label = forwardRef<HTMLLabelElement, LabelProps>(function Label(props, ref) {
  const { className, children, text, ...rest } = props;
  const classes = clsx(baseClass, className);
  return (
    <label className={classes} ref={ref} {...rest}>
      <span>{text}</span>
      {children}
    </label>
  );
});

export default Label;
