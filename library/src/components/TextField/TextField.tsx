import { forwardRef, Ref } from 'react';

import HelperText from '../HelperText/HelperText';
import Input from '../Input';
import Label from '../Label';
import { TextFieldProps } from './TextField.types';

const TextField = forwardRef<Ref<HTMLInputElement>, TextFieldProps>(function TextField(props, ref) {
  const {
    label,
    className,
    id,
    helperText,
    required,
    disabled,
    readOnly,
    hideLabel,
    hasError,
    errorText,
    hint,
    isValid,
    ...rest
  } = props;

  if (hint) {
    rest['aria-describedby'] = `${id}-hint`;
  }

  if (helperText) {
    rest['aria-describedby'] = `${id}-helper-text`;
  }

  if (hasError) {
    rest['aria-invalid'] = true;
    rest['aria-describedby'] = `${id}-error-text`;
  }

  return (
    <div className="sym-input-group my-2">
      <Label id={id} text={label} required={required} hidden={hideLabel} hint={hint} />
      <Input
        id={id}
        // This is neccessary to pass the ref to the input typescript gives a wrong type
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        ref={ref as Ref<HTMLInputElement>}
        className={className}
        required={required}
        disabled={disabled}
        readOnly={readOnly}
        hasError={hasError}
        isValid={isValid}
        {...rest}
      />
      <HelperText id={id} hasError={hasError}>
        {hasError ? errorText : helperText}
      </HelperText>
    </div>
  );
});

export default TextField;
