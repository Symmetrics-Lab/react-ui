import clsx from 'clsx';
import { HelperTextProps } from './HelperText.types';

const baseClass = 'ml-2 sym-textfield__helper-text mt-2 text-sm text-gray-500';

export default function HelperText(props: HelperTextProps) {
  const { id, className, children, hasError, ...rest } = props;
  const classes = clsx(baseClass, hasError ? 'dark:text-red-500 text-red-700' : null, className);

  return (
    <p className={classes} id={hasError ? `${id}-error-text` : `${id}-helper-text`} {...rest}>
      {children}
    </p>
  );
}
