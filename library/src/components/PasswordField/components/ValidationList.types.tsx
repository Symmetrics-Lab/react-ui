import { UsePasswordValidationResponse } from '../hooks/usePasswordValidation.types';
import { PasswordFieldProps } from '../PasswordField.types';

type ValidationListVal = Pick<PasswordFieldProps, 'validation'>;

export type ValidationListProps = ValidationListVal & UsePasswordValidationResponse;
