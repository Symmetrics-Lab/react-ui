import clsx from 'clsx';
import { HelperTextProps } from './HelperText.types';

const baseClass = 'ml-2 textfield__helper-text mt-2 text-sm text-sym-secondary-gray dark:text-sym-secondary-gray-dark';

export default function HelperText(props: HelperTextProps) {
  const { id, className, children, hasError, ...rest } = props;
  const classes = clsx(baseClass, hasError ? 'dark:text-sym-error text-sym-error-dark' : null, className);

  return (
    <p className={classes} id={hasError ? `${id}-error-text` : `${id}-helper-text`} {...rest}>
      {children}
    </p>
  );
}
