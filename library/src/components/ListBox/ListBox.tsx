import { forwardRef, Fragment, Ref, useEffect } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { useController } from 'react-hook-form';
import { ListBoxProps } from './ListBox.types';
import HelperText from '../HelperText/HelperText';

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}
const ListBox = forwardRef<Ref<HTMLButtonElement>, ListBoxProps>(function ListBox(props, ref) {
  const {
    value,
    setValue,
    options,
    label = '',
    disabled,
    id,
    hasError,
    errorText,
    helperText,
    placeholder,
    onForm=false,
    optionClassName,
  } = props;
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
        <Listbox value={value.data} onChange={onChanging} disabled={disabled}>
          {({ open }) => (
            <>
              {label !== '' && (
                <Listbox.Label className="block text-sm font-medium dark:text-sym-txt-primary-dark text-sym-txt-primary">
                  {label}
                </Listbox.Label>
              )}
              <div className={`relative mt-1`}>
                <Listbox.Button
                  className={`relative w-full min-h-full ${
                    disabled ? 'cursor-not-allowed' : 'cursor-default'
                  } rounded-md border ${
                    hasError
                      ? 'border-sym-error dark:border-sym-error-dark'
                      : 'border-sym-border dark:border-sym-border-dark'
                  }  bg-sym-input-bg dark:bg-sym-input-bg-dark ${
                    value?.data && value.data[value.labelField] ? 'py-2' : 'py-2'
                  } pl-3 pr-10 text-left shadow-sm focus:border-sym-primary dark:focus:border-sym-primary-dark focus:outline-none focus:ring-1 focus:ring-sym-primary dark:focus:ring-sym-primary-dark sm:text-sm `}
                >
                  <span
                    className={`block truncate ${
                      disabled
                        ? 'text-sym-disabled dark:text-sym-disabled-dark'
                        : 'dark:text-sym-txt-primary-dark text-sym-txt-primary'
                    } ${
                      !value.data &&
                      !disabled &&
                      'dark:text-sym-placeholder-dark text-sym-placeholder'
                    } ${hasError && 'text-sym-error dark:text-sym-error-dark'}`}
                  >
                    {value?.data ? value.data[value.labelField] : placeholder}
                  </span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <ChevronDownIcon
                      className={`h-5 w-5 text-sym-txt-primary dark:text-sym-txt-primary-dark  ${
                        disabled && 'text-sym-disabled dark:text-sym-disabled-dark'
                      } `}
                      aria-hidden="true"
                    />
                  </span>
                </Listbox.Button>
                <Transition
                  show={open}
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options
                    className={`${optionClassName} absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-sym-input-bg dark:bg-sym-layout-dark py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm border-solid border-2 border-sym-border dark:border-sym-border-dark`}
                  >
                    {options.map((option, index: number) => (
                      <Listbox.Option
                        key={`keyListBox-${index}`}
                        className={({ active, selected }) => {
                          return classNames(
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
                          );
                        }}
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
                              {option[value.labelField]}
                            </span>
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </>
          )}
        </Listbox>
      ) : (
        <Listbox value={value.data} onChange={setValue} disabled={disabled}>
          {({ open }) => (
            <>
              {label !== '' && (
                <Listbox.Label className="block text-sm font-medium dark:text-sym-txt-primary-dark text-sym-txt-primary">
                  {label}
                </Listbox.Label>
              )}
              <div className={`relative mt-1`}>
                <Listbox.Button
                  className={`relative w-full min-h-full ${
                    disabled ? 'cursor-not-allowed' : 'cursor-default'
                  } rounded-md border ${
                    hasError
                      ? 'border-sym-error dark:border-sym-error-dark'
                      : 'border-sym-border dark:border-sym-border-dark'
                  }  bg-sym-input-bg dark:bg-sym-input-bg-dark ${
                    value?.data && value.data[value.labelField] ? 'py-2' : 'py-2'
                  } pl-3 pr-10 text-left shadow-sm focus:border-sym-primary dark:focus:border-sym-primary-dark focus:outline-none focus:ring-1 focus:ring-sym-primary dark:focus:ring-sym-primary-dark sm:text-sm `}
                >
                  <span
                    className={`block truncate ${
                      disabled
                        ? 'text-sym-disabled dark:text-sym-disabled-dark'
                        : 'dark:text-sym-txt-primary-dark text-sym-txt-primary'
                    } ${
                      !value.data &&
                      !disabled &&
                      'dark:text-sym-placeholder-dark text-sym-placeholder'
                    } ${hasError && 'text-sym-error dark:text-sym-error-dark'}`}
                  >
                    {value?.data ? value.data[value.labelField] : placeholder}
                  </span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <ChevronDownIcon
                      className={`h-5 w-5 text-sym-txt-primary dark:text-sym-txt-primary-dark  ${
                        disabled && 'text-sym-disabled dark:text-sym-disabled-dark'
                      } `}
                      aria-hidden="true"
                    />
                  </span>
                </Listbox.Button>
                <Transition
                  show={open}
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options
                    className={`${optionClassName} absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-sym-input-bg dark:bg-sym-layout-dark py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm border-solid border-2 border-sym-border dark:border-sym-border-dark`}
                  >
                    {options.map((option, index: number) => (
                      <Listbox.Option
                        key={`keyListBox-${index}`}
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
                            <span
                              className={classNames(
                                selected ? 'font-semibold' : 'font-normal',
                                'block truncate'
                              )}
                            >
                              {option[value.labelField]}
                            </span>
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </>
          )}
        </Listbox>
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
export default ListBox;
