import clsx from 'clsx';
import { Menu } from '@headlessui/react';
import { DropdownItemProps } from './DropdownItem.types';

export default function DropdownItem(props: DropdownItemProps) {
  const { className, link, label, disabled } = props;
  return (
    <Menu.Item disabled={disabled}>
      {({ active }) => (
        <a
          href={link}
          className={clsx(
            active ? 'bg-gray-100' : null,
            'block px-4 py-2 text-sm text-gray-700',
            className
          )}
        >
          {label}
        </a>
      )}
    </Menu.Item>
  );
}
