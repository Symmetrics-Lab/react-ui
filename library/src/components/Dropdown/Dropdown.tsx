import { Fragment } from 'react';
import clsx from 'clsx';
import { Menu, Transition } from '@headlessui/react';
import { DropdownProps } from './Dropdown.types';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

export default function Dropdown(props: DropdownProps) {
  const { className, subClassName, label, icon, srLabel, children } = props;
  const classes = clsx('dropdown relative ml-3', className);

  return (
    <Menu as="div" className={classes}>
      {({ open }) => (
        <>
          <div>
            {label && (
              <div>
                <Menu.Button className="inline-flex w-full justify-center rounded-md border 
                border-sym-boder 
                dark:border-sym-boder-dark 
                bg-sym-layout 
                dark:bg-sym-layout-dark
                px-4 py-2 text-sm font-medium 
                text-sym-txt-primary 
                dark:text-sym-txt-primary-dark 
                shadow-sm  
                dark:hover:bg-sym-hover-dark 
                hover:bg-sym-hover 
                focus:outline-none focus:ring-2 
                focus:ring-sym-primary 
                dark:focus:ring-sym-primary-dark focus:ring-offset-2 focus:ring-offset-sym-primary
                dark:focus:ring-offset-sym-primary-dark">
                  {label}
                  <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                </Menu.Button>
              </div>
            )}
            {icon && (
              <Menu.Button className="flex rounded-full 
              bg-sym-layout 
              dark:bg-sym-layout-dark 
              text-sm focus:outline-none focus:ring-2 
              focus:ring-sym-primary 
              dark:focus:ring-sym-primary-dark 
              ">
                <span className="sr-only">{srLabel || 'Open'}</span>
                <div className="h-8 w-8">{icon}</div>
              </Menu.Button>
            )}
          </div>
          <Transition
            show={open}
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items
              static
              className={clsx(
                'absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md  bg-sym-header-bg dark:bg-sym-header-bg-dark py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none divide-y divide-gray-100',
                subClassName
              )}
            >
              {children}
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
}
