import type { TopMenuItemProps } from '../TopMenuItem/TopMenuItem.types';

export interface TopMenuProps {
  className?: string;
  items: TopMenuItemProps[];
  element?: React.ElementType;
  currentPath?: string;
}
