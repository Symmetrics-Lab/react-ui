import clsx from 'clsx';
import { forwardRef } from 'react';
import { LabelProps } from './Label.types';

const baseClass = 'sym-textfield__label block text-sm font-medium text-gray-700';

const Label = forwardRef<HTMLLabelElement, LabelProps>(function Label(props, ref) {
  const { className, id, text, required, hint, hidden, ...rest } = props;
  const classes = clsx(baseClass, hidden ? 'sr-only' : null, className);
  return (
    <div className="flex justify-between">
      <label className={classes} htmlFor={id} ref={ref} {...rest}>
        <span>{text}</span>
        {required && (
          <span className="sym-textfield__required_label text-red-700" aria-label="required">
            {' '}
            *
          </span>
        )}
      </label>
      {hint && (
        <span className="sym-textfield__hint text-sm text-gray-500" id={`${id}-hint`}>
          {hint}
        </span>
      )}
    </div>
  );
});

export default Label;
