import clsx from 'clsx';
import { SubMenuProps } from './SubMenu.types';
import SubMenuA from './SubMenuA';

export default function SubMenu(props: SubMenuProps) {
  const { className, items, as, currentPath, classNameItem, userData } = props;

  const classes = clsx('space-y-1', className);
  return (
    <nav role="menu" className={classes}>
      {userData && (
        <div className="p-4 flex">
          <img className="relative h-14 w-14 rounded-full" src={userData?.img} alt="" />
          <div className="ml-4">
            <h2 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">
              {userData?.name}
            </h2>
            {userData?.label && (
              <h2 className="mt-1 text-sm text-gray-500 dark:text-gray-400">{userData?.label}</h2>
            )}
            <span className="text-[12px] text-gray-500 dark:text-gray-400">
              {userData?.lastSesion}
            </span>
          </div>
        </div>
      )}

      {items.map((item) => {
        // Check if element is a React.ReactNode else use default MenuItem
        const Element = as || SubMenuA;
        return (
          <Element
            key={item.name}
            role="menuitem"
            {...item}
            current={currentPath}
            className={clsx(
              currentPath === item.link
                ? 'bg-gray-100 dark:bg-gray-700 border-blue-400 text-black dark:text-white'
                : 'border-transparent text-gray-500 dark:text-gray-400  hover:bg-gray-100 dark:hover:bg-gray-700',
              'group border-l-4 px-3 py-2 flex items-center text-sm font-medium',
              classNameItem
            )}
            aria-current={currentPath === item.link ? 'page' : undefined}
          >
            <item.icon
              className={clsx(
                /* item.current
              ? 'text-teal-500 group-hover:text-teal-500'
              : 'text-gray-400 group-hover:text-gray-500',*/
                'text-gray-400 flex-shrink-0 -ml-1 mr-3 h-6 w-6'
              )}
              aria-hidden="true"
            />
            <span className="truncate">{item.name}</span>
          </Element>
        );
      })}
    </nav>
  );
}
