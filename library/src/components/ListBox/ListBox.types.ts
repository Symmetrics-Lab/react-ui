import React, { Dispatch, ReactNode, SetStateAction } from 'react';
import { UseControllerProps } from 'react-hook-form';

type ListboxOptionType = {
  labelField: string;
  data: any;
};
export interface ListBoxProps extends UseControllerProps<any> {
  value: ListboxOptionType;
  setValue: Dispatch<SetStateAction<any>>;
  options: any[];
  label?: string;
  disabled?: boolean | undefined;
  id: string;
  hasError?: boolean;
  errorText?: string | ReactNode;
  helperText?: string | ReactNode;
  placeholder?: string;
  onForm?: boolean;
  optionClassName?: string;
}
