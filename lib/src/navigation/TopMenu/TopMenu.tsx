import clsx from 'clsx';
import TopMenuItem from '../TopMenuItem/TopMenuItem';
import { TopMenuProps } from './TopMenu.types';

export default function TopMenu(props: TopMenuProps) {
  const { className, items, element } = props;

  const classes = clsx('sym-top-menu hidden sm:ml-6 sm:flex sm:space-x-8', className);
  return (
    <div className={classes}>
      {items.map((item) => {
        // Check if element is a React.ReactNode else use default MenuItem
        const Element = element || TopMenuItem;
        return <Element key={item.label} {...item} />;
      })}
    </div>
  );
}
