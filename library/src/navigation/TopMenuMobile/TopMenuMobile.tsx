import { Disclosure } from '@headlessui/react';
import clsx from 'clsx';
import TopMenuMobileItem from '../TopMenuMobileItem/TopMenuMobileItem';
import { TopMenuProps } from './TopMenuMobile.types';

export default function TopMenu(props: TopMenuProps) {
  const { className, items, element, currentPath } = props;

  const classes = clsx('sym-top-menu-mobile space-y-1 pt-2 pb-4', className);
  return (
    <Disclosure.Panel className="sm:hidden">
      <div className={classes}>
        {items.map((item) => {
          // Check if element is a React.ReactNode else use default MenuItem
          const Element = element || TopMenuMobileItem;
          return (
            <Element
              key={item.label}
              current={currentPath === (item.currentLink ? item.currentLink : item.link)}
              {...item}
            />
          );
        })}
      </div>
    </Disclosure.Panel>
  );
}
