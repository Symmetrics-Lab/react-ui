import clsx from 'clsx';
import { Menu } from '@headlessui/react';
import { DropdownItemProps } from './DropdownItem.types';

export default function DropdownItem(props: DropdownItemProps) {
  const { className, link, disabled, as, children } = props;

  return (
    <Menu.Item as={as ?? 'a'} disabled={disabled} href={link}>
      {({ active }) => (
        <span
          className={clsx(
            'block px-4 py-2 text-sm text-gray-700',
            active && 'bg-gray-100',
            className
          )}
        >
          {children}
        </span>
      )}
    </Menu.Item>
  );
}
