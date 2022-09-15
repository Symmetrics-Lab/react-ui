import type { TopMenuItemProps } from '../TopMenuItem/TopMenuItem.types';

export interface TopMenuProps {
  className?: string;
  items: TopMenuItemProps[];
  as?: React.ElementType;
  currentPath?: string;
}
