import clsx from 'clsx';
import { forwardRef } from 'react';
import { LabelProps } from './Label.types';

const baseClass = 'textfield__label block text-sm font-medium text-sym-secondary-gray dark:text-sym-secondary-gray-dark';

const Label = forwardRef<HTMLLabelElement, LabelProps>(function Label(props, ref) {
  const { className, id, text, required, hint, hidden, ...rest } = props;
  const classes = clsx(baseClass, hidden ? 'sr-only' : null, className);
  return (
    <div className="flex justify-between">
      <label className={classes} htmlFor={id} ref={ref} {...rest}>
        <span>{text}</span>
        {required && (
          <span className="textfield__required_label text-sym-error dark:text-sym-error-dark" aria-label="required">
            {' '}
            *
          </span>
        )}
      </label>
      {hint && (
        <span className="textfield__hint text-sm text-sym-secondary-gray dark:text-sym-secondary-gray-dark" id={`${id}-hint`}>
          {hint}
        </span>
      )}
    </div>
  );
});

export default Label;
