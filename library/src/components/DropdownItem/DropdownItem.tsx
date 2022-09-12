import clsx from 'clsx';
import { Menu } from '@headlessui/react';
import { DropdownItemProps } from './DropdownItem.types';

export default function DropdownItem(props: DropdownItemProps) {
  const { className, link, disabled, as, children, ...rest } = props;
  const classes = clsx('sym-dropdown-item', as === 'button' && 'w-full');
  return (
    <Menu.Item as={as ?? 'a'} disabled={disabled} href={link} className={classes} {...rest}>
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
