import { forwardRef } from 'react';
import clsx from 'clsx';
import { BellIcon, UserIcon } from '@heroicons/react/20/solid';
import { NavBar, TopMenu, Dropdown, DropdownItem, Logo } from '@symlab/react-ui';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import type { TopMenuItemProps } from '@symlab/react-ui/dist/navigation/TopMenuItem/TopMenuItem.types';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProfilePage from './pages/ProfilePage';

const items = [
  {
    label: 'Home',
    link: '/',
  },
  {
    label: 'About',
    link: '/about',
  },
  {
    label: 'Contact',
    link: '/contact',
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
    'sym-top-menu-item inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700',
    {
      'sym-top-menu-item__current border-indigo-500 text-gray-900': props.current,
    }
  );
  return (
    <Link to={props.link} className={classes}>
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

function App() {
  const { pathname } = useLocation();
  return (
    <>
      <NavBar
        logo={<LogoElement />}
        leftItems={<TopMenu items={items} element={LinkComp} currentPath={pathname} />}
        rightItems={
          <>
            <button
              type="button"
              className="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <span className="sr-only">View notifications</span>
              <BellIcon className="h-6 w-6" aria-hidden="true" />
            </button>
            <Dropdown srLabel="Open Profile" icon={<UserIcon className="text-gray-700 h-8 w-8" />}>
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
      <main className="p-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
