import clsx from 'clsx';
import { TopMenuItemProps } from './TopMenuItem.types';

export default function TopMenuItem({ label, link, current }: TopMenuItemProps) {
  const classes = clsx(
    'sym-top-menu-item inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-sym-header-txt dark:text-sym-header-txt-dark hover:border-sym-border dark:hover:border-sym-border-dark',
    {
      'sym-top-menu-item__current border-sym-primary dark:border-sym-primary-dark text-sym-primary dark:text-sym-primary-dark': current,
    }
  );
  return (
    <a role="menuitem" href={link || '#'} className={classes}>
      {label}
    </a>
  );
}
