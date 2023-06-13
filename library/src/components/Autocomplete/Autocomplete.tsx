import { createElement, forwardRef, Fragment, Ref, useEffect, useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { Combobox } from '@headlessui/react';
import { useController } from 'react-hook-form';
import { AutocompleteProps } from './Autocomplete.types';
import HelperText from '../HelperText/HelperText';

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}
const Autocomplete = forwardRef<Ref<HTMLButtonElement>, AutocompleteProps>(function Autocomplete(
  props: AutocompleteProps,
  ref
) {
  const {
    value,
    setValue,
    options,
    label = '',
    disabled,
    icon,
    id,
    hasError,
    errorText,
    helperText,
    placeholder,
    className,
    onForm = false,
    variant = 'default',
    onInputChange,
  } = props;
  const [query, setQuery] = useState('');

  const labelField = value.labelField;

  const filteredOptions =
    query === ''
      ? options
      : options.filter((option) => {
          return option[labelField].toLowerCase().includes(query.toLowerCase());
        });

  let onChanging: any;
  if (onForm) {
    const {
      field: { value: fieldValue, onChange },
    } = useController(props);
    onChanging = onChange;
    useEffect(() => {
      if (fieldValue) {
        setValue(fieldValue);
      }
    }, [fieldValue]);
  }

  return (
    <>
      {onForm ? (
        <Combobox
          as="div"
          value={value.data}
          onChange={onChanging}
          disabled={disabled}
          className={className}
        >
          {label !== '' && (
            <Combobox.Label className="block text-sm font-medium text-sym-txt-primary dark:text-sym-txt-primary-dark">
              {label}
            </Combobox.Label>
          )}
          <div className={`relative mt-1`}>
            <Combobox.Input
              className={`w-full rounded-md border ${
                hasError
                  ? 'border-sym-error dark:border-sym-error-dark'
                  : 'border-sym-input-border dark:border-sym-input-border-dark'
              } bg-sym-input-bg dark:bg-sym-input-bg-dark  py-2 pl-3 pr-10 shadow-sm focus:border-sym-primary dark:focus:border-sym-primary-dark focus:outline-none focus:ring-1 focus:ring-sym-primary dark:focus:ring-sym-primary-dark  sm:text-sm ${
                disabled
                  ? 'text-sym-disabled dark:text-sym-disabled-dark cursor-not-allowed'
                  : 'text-sym-txt-primary dark:text-sym-txt-primary-dark cursor-default'
              } placeholder-sym-placeholder dark:placeholder-sym-placeholder-dark ${
                hasError && 'text-sym-error dark:text-sym-error-dark'
              }`}
              onChange={(event) => {
                onInputChange && onInputChange(event.target.value);
                setQuery(event.target.value);
              }}
              placeholder={placeholder}
              displayValue={(option: any) => {
                return option && option[labelField] ? option[labelField] : null;
              }}
            />
            <Combobox.Button
              className={`absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none ${
                disabled ? 'cursor-not-allowed' : 'cursor-default'
              } ${variant === 'primary' ? 'bg-sym-primary dark:bg-sym-primary-dark' : null} ${
                variant === 'secondary'
                  ? 'bg-sym-secondary-green dark:bg-sym-secondary-green-dark'
                  : null
              }`}
            >
              {icon ? (
                <>
                  {icon}
                </>
              ) : (
                <ChevronDownIcon
                  className={`h-5 w-5 text-sym-txt-primary dark:text-sym-txt-primary-dark`}
                  aria-hidden="true"
                />
              )}
            </Combobox.Button>

            {filteredOptions.length > 0 && (
              <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-sym-input-bg dark:bg-sym-layout-dark py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm border-solid border-2 border-sym-border dark:border-sym-border-dark">
                {filteredOptions.map((option, index) => (
                  <Combobox.Option
                    key={`Autocomplete-${index}-${option[labelField]}`}
                    className={({ active, selected }) =>
                      classNames(
                        selected && !active ? 'bg-sym-active dark:bg-sym-active-dark' : null,
                        option[value.labelField] &&
                          value.data &&
                          value.data[value.labelField] &&
                          option[value.labelField] === value.data[value.labelField] &&
                          !active
                          ? 'bg-sym-active dark:bg-sym-active-dark'
                          : null,
                        active
                          ? 'dark:text-sym-txt-primary-dark text-sym-txt-primary' //text-white bg-primary-500
                          : 'dark:text-sym-secondary-gray-dark text-sym-secondary-gray',
                        'relative cursor-default select-none py-2 pl-3 pr-9'
                      )
                    }
                    value={option}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={classNames(
                            selected ||
                              (option[value.labelField] &&
                                value.data &&
                                value.data[value.labelField] &&
                                option[value.labelField] === value.data[value.labelField])
                              ? 'font-semibold'
                              : 'font-normal',
                            'block truncate'
                          )}
                        >
                          {option[labelField]}
                        </span>
                      </>
                    )}
                  </Combobox.Option>
                ))}
              </Combobox.Options>
            )}
          </div>
        </Combobox>
      ) : (
        <Combobox
          as="div"
          value={value.data}
          onChange={setValue}
          disabled={disabled}
          className={className}
        >
          {label !== '' && (
            <Combobox.Label className="block text-sm font-medium text-gray-700 dark:text-white">
              {label}
            </Combobox.Label>
          )}
          <div className={`relative mt-1`}>
            <Combobox.Input
              className={`w-full rounded-md border border-sym-input-border  dark:border-sym-input-border-dark bg-sym-input-bg dark:bg-sym-input-bg-dark py-2 pl-3 pr-10 shadow-sm focus:border-sym-primary dark:focus:border-sym-primary-dark focus:outline-none focus:ring-1 focus:ring-sym-primary dark:focus:ring-sym-primary sm:text-sm ${
                disabled
                  ? 'text-sym-disabled dark:sym-disabled-dark cursor-not-allowed'
                  : 'text-sym-txt-primary dark:text-sym-txt-primary-dark cursor-default'
              } ${!value.data && 'text-sym-txt-primary dark:text-sym-txt-primary-dark'} ${
                hasError && 'text-sym-error dark:text-sym-error-dark'
              }`}
              onChange={(event) => {
                onInputChange && onInputChange(event.target.value);
                setQuery(event.target.value);
              }}
              placeholder={placeholder}
              displayValue={(option: any) => {
                return option && option[labelField] ? option[labelField] : null;
              }}
            />
            <Combobox.Button
              className={`absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none ${
                disabled ? 'cursor-not-allowed' : 'cursor-default'
              } ${variant === 'primary' ? 'bg-sym-primary dark:bg-sym-primary-dark' : null} ${
                variant === 'secondary'
                  ? 'bg-sym-secondary-green dark:bg-sym-secondary-green-dark text-sym-txt-secondary dark:text-sym-txt-secondary-dark'
                  : null
              }`}
            >
              {icon ? <>{icon}</> : <ChevronDownIcon className={`h-5 w-5`} aria-hidden="true" />}
            </Combobox.Button>

            {filteredOptions.length > 0 && (
              <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-sym-input-bg dark:bg-sym-layout-dark py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm border-solid border-2 border-sym-border dark:border-sym-border-dark">
                {filteredOptions.map((option, index) => (
                  <Combobox.Option
                    key={`Autocomplete-${index}-${option[labelField]}`}
                    className={({ active, selected }) =>
                      classNames(
                        selected && !active ? 'bg-sym-active dark:bg-sym-active-dark' : null,
                        active
                          ? 'dark:text-sym-txt-primary-dark text-sym-txt-primary' //text-white bg-primary-500
                          : 'dark:text-sym-secondary-gray-dark text-sym-secondary-gray',
                        'relative cursor-default select-none py-2 pl-3 pr-9'
                      )
                    }
                    value={option}
                  >
                    {({ selected }) => (
                      <>
                        <span className={classNames('block truncate', selected && 'font-semibold')}>
                          {option[labelField]}
                        </span>
                      </>
                    )}
                  </Combobox.Option>
                ))}
              </Combobox.Options>
            )}
          </div>
        </Combobox>
      )}
      <HelperText
        id={id}
        hasError={hasError}
        className={`mt-0 ${hasError ? 'text-sym-error dark:text-sym-error-dark' : ''}`}
      >
        {hasError ? errorText : helperText}
      </HelperText>
    </>
  );
});
export default Autocomplete;
