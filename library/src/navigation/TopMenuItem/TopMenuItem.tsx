import clsx from 'clsx';
import { TopMenuItemProps } from './TopMenuItem.types';

export default function TopMenuItem({ label, link, current }: TopMenuItemProps) {
  const classes = clsx(
    'sym-top-menu-item inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700',
    {
      'sym-top-menu-item__current border-indigo-500 text-gray-900': current,
    }
  );
  return (
    <a role="menuitem" href={link || '#'} className={classes}>
      {label}
    </a>
  );
}
