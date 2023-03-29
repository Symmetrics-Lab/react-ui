
import { Link, useLocation } from 'react-router-dom';
import {
  BellIcon,
  UserIcon,
} from '@heroicons/react/20/solid';import { Dropdown, DropdownItem, Logo, NavBar, TopMenu } from '@symlab/react-ui';
import { TopMenuItemProps } from '@symlab/react-ui/dist/navigation/TopMenuItem/TopMenuItem.types';
import clsx from 'clsx';
import { forwardRef } from 'react';
import Notifications from './sections/Notifications';

const items = [
  {
    label: 'Home',
    link: '/',
  },
  {
    label: 'Forms',
    link: '/forms',
  },
  {
    label: 'Palette',
    link: '/palette',
  },
  {
    label: 'Contact',
    link: '/contact',
  },
  {
    label: 'Login',
    link: '/login',
  },
  {
    label: 'Register',
    link: '/register',
  },
];

const dropItems = [
  {
    label: 'Profile',
    link: '/profile',
  },
  {
    label: 'Settings',
    link: '/settings',
  },
  {
    label: 'Sign out',
    link: '/signout',
  },
];

const LogoElement = () => (
  <Logo src="https://symlab.io/foot-icon.svg" alt="SymLab" href="/" title="Go to home page" />
);

const LinkComp = (props: TopMenuItemProps) => {
  const classes = clsx(
    'sym-top-menu-item inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-sym-header-txt dark:text-sym-header-txt-dark hover:border-sym-border dark:hover:border-sym-border-dark',
    {
      'sym-top-menu-item__current border-sym-primary dark:border-sym-primary-dark text-sym-primary dark:text-sym-primary-dark':
        props.current,
    }
  );
  return (
    <Link to={props.link} role="menuitem" className={classes}>
      {props.label}
    </Link>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const DropItem = forwardRef<HTMLAnchorElement, any>(function DropItem(props, ref) {
  const { href, children, className, ...rest } = props;
  return (
    <Link className={className} to={href ?? '/'} ref={ref} {...rest}>
      {children}
    </Link>
  );
});
export default function Navbar(): JSX.Element {
    const { pathname } = useLocation();
  return (
    <>
      <NavBar
        logo={<LogoElement />}
        leftItems={<TopMenu items={items} as={LinkComp} currentPath={pathname} />}
        rightItems={
          <>
            <Dropdown
              srLabel="Open notifications"
              className=""
              subClassName={
                'w-[440px] border-2 dark:border-sym-border-dark border-sym-border overflow-auto'
              }
              icon={
                <BellIcon className="items-center text-sym-header-txt dark:text-sym-header-txt-dark" />
              }
            >
              <Notifications />
            </Dropdown>
            <Dropdown srLabel="Open Profile" icon={<UserIcon className="text-sym-header-txt dark:text-sym-header-txt-dark h-8 w-8" />}>
              {dropItems.map((item) => (
                <DropdownItem
                  key={item.link}
                  link={item.link}
                  as={DropItem}
                  className="group flex items-center"
                >
                  {item.label}
                </DropdownItem>
              ))}
            </Dropdown>
          </>
        }
        itemsMobile={items}
      />
    </>
  );
}
