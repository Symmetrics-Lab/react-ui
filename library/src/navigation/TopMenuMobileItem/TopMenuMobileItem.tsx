import { Disclosure } from '@headlessui/react';
import clsx from 'clsx';
import { TopMenuMobileItemProps } from './TopMenuMobileItem.types';

export default function TopMenuMobileItem({ label, link, current }: TopMenuMobileItemProps) {
  const classes = clsx(
    'sym-top-menu-mobile-item block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium ',
    current
      ? 'sym-top-menu-mobile-item__current bg-primary-50 border-primary-500 text-primary-700'
      : 'text-gray-500 hover:bg-gray-50 hover:border-gray-300 dark:hover:border-gray-600 hover:text-gray-700'
  );
  return (
    <Disclosure.Button as="a" href={link} className={classes}>
      {label}
    </Disclosure.Button>
  );
}
