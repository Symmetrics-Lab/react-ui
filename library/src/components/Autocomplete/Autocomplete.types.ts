import React, { Dispatch, SetStateAction, ReactNode } from 'react';
import { UseControllerProps } from 'react-hook-form';
import { IconType } from '../Icon/Icon.types';

type AutocompleteOptionType = {
  labelField: string;
  data: any;
};
export interface AutocompleteProps extends UseControllerProps<any> {
  value: AutocompleteOptionType;
  setValue: Dispatch<SetStateAction<any>>;
  options: any[];
  label?: string;
  disabled?: boolean | undefined;
  icon?: IconType;
  id: string;
  hasError?: boolean;
  errorText?: string | ReactNode;
  helperText?: string | ReactNode;
  placeholder?: string;
  onForm: boolean;
  onInputChange?: (event: string) => void;
  className?: string;
  variant?: 'default' | 'secondary' | 'primary';
}
