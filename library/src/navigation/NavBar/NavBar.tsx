import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import TopMenuMobile from '../TopMenuMobile';

import { NavBarProps } from './NavBar.types';

export default function NavBar(props: NavBarProps) {
  const { logo, leftItems, rightItems, itemsMobile, currentPath } = props;
  return (
    <Disclosure as="nav" className="bg-sym-header-bg dark:bg-sym-header-bg-dark shadow">
      {({ open }) => (
        <>
          <div className="mx-auto w-full px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button
                  className="inline-flex items-center justify-center rounded-md p-2 
                text-sym-header-txt 
                dark:text-sym-header-txt 
                hover:bg-sym-hover 
                hover:bg-opacity-25
                dark:hover:bg-sym-hover-dark
                hover:text-sym-hover 
                hover:text-sym-hover-dark
                focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sym-primary dark:focus:ring-sym-primary-dark"
                >
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">{logo}</div>
                {leftItems ? leftItems : null}
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {rightItems ? rightItems : null}
              </div>
            </div>
          </div>
          {itemsMobile && itemsMobile?.length > 0 ? (
            <TopMenuMobile items={itemsMobile} currentPath={currentPath} />
          ) : null}
        </>
      )}
    </Disclosure>
  );
}
