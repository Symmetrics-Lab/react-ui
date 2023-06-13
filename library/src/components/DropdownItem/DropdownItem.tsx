import clsx from 'clsx';
import { Menu } from '@headlessui/react';
import { DropdownItemProps } from './DropdownItem.types';

export default function DropdownItem(props: DropdownItemProps) {
  const { className, link, disabled, as, children, ...rest } = props;
  const classes = clsx('dropdown-item', as === 'button' && 'w-full');
  return (
    <Menu.Item as={as ?? 'button'} disabled={disabled} className={classes} {...rest}>
      {({ active }) => (
        <span
          className={clsx(
            'block px-4 py-2 text-sm text-sym-header-txt dark:text-sym-header-txt-dark',
            active && 'bg-sym-hover dark:bg-sym-hover-dark',
            className
          )}
        >
          {children}
        </span>
      )}
    </Menu.Item>
  );
}
