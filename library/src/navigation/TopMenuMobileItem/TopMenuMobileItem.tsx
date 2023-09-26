import { Disclosure } from '@headlessui/react';
import clsx from 'clsx';
import { TopMenuMobileItemProps } from './TopMenuMobileItem.types';

export default function TopMenuMobileItem({ label, link, current }: TopMenuMobileItemProps) {
  const classes = clsx(
    'sym-top-menu-mobile-item block border-l-4 py-2 pl-3 pr-4 text-base font-medium ',
    current
      ? 'sym-top-menu-mobile-item__current !border-sym-primary dark:border-sym-primary-dark !text-sym-primary dark:text-sym-primary-dark'
      : 'text-sym-header-txt text-text-sym-header-txt dark:text-sym-header-txt-dark '
  );
  return (
    <Disclosure.Button as="a" href={link} className={classes}>
      {label}
    </Disclosure.Button>
  );
}
