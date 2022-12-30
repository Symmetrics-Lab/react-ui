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
    onForm,
    variant = 'default',
    onInputChange
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
            <Combobox.Label className="block text-sm font-medium text-gray-900 dark:text-white">
              {label}
            </Combobox.Label>
          )}
          <div className={`relative mt-1`}>
            <Combobox.Input
              className={`w-full rounded-md border ${
                hasError ? 'border-symlab-red-300' : 'border-gray-300 dark:border-gray-600'
              } bg-white dark:bg-gray-700  py-2 pl-3 pr-10 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 sm:text-sm ${
                disabled ? 'text-gray-400 dark:text-white cursor-not-allowed' : 'text-gray-700 cursor-default dark:text-white'
              } placeholder-gray-400 ${hasError && 'text-symlab-red-300'}`}
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
              } ${variant === 'primary' ? 'bg-primary-500' : null} ${
                variant === 'secondary' ? 'bg-secondary-500' : null
              }`}
            >
              {icon ? (
                <>
                  {createElement(icon, {
                    className: 'h-5 w-5',
                    'aria-hidden': true,
                  })}
                </>
              ) : (
                <ChevronDownIcon className={`h-5 w-5 dark:text-white`} aria-hidden="true" />
              )}
            </Combobox.Button>

            {filteredOptions.length > 0 && (
              <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white dark:bg-gray-700 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm dark:text-white">
                {filteredOptions.map((option, index) => (
                  <Combobox.Option
                    key={`Autocomplete-${index}-${option[labelField]}`}
                    className={({ active, selected }) =>
                      classNames(
                        selected && !active ? 'bg-gray-200 dark:text-white' : null,
                        option[value.labelField] &&
                          value.data &&
                          value.data[value.labelField] &&
                          option[value.labelField] === value.data[value.labelField] &&
                          !active
                          ? 'bg-gray-200'
                          : null,
                        active ? 'bg-primary-500 text-white' : 'text-gray-900 dark:text-white',
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
              className={`w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 py-2 pl-3 pr-10 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 sm:text-sm ${
                disabled ? 'text-gray-400 dark:text-white cursor-not-allowed' : 'text-gray-700 dark:text-white cursor-default'
              } ${!value.data && 'text-gray-400 dark:text-white'} ${hasError && 'text-symlab-red-300'}`}
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
              } ${variant === 'primary' ? 'bg-primary-500' : null} ${
                variant === 'secondary' ? 'bg-secondary-500 text-white' : null
              }`}
            >
              {icon ? (
                <>
                  {createElement(icon, {
                    className: 'h-5 w-5',
                    'aria-hidden': true,
                  })}
                </>
              ) : (
                <ChevronDownIcon className={`h-5 w-5`} aria-hidden="true" />
              )}
            </Combobox.Button>

            {filteredOptions.length > 0 && (
              <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base dark:text-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {filteredOptions.map((option, index) => (
                  <Combobox.Option
                    key={`Autocomplete-${index}-${option[labelField]}`}
                    className={({ active, selected }) =>
                      classNames(
                        selected && !active ? 'bg-gray-200' : null,
                        active ? 'bg-primary-500 text-white' : 'text-gray-900 dark:text-white',
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
        className={`mt-0 ${hasError ? 'text-symlab-red-300' : ''}`}
      >
        {hasError ? errorText : helperText}
      </HelperText>
    </>
  );
});
export default Autocomplete;
