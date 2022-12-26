import { CogIcon, KeyIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { ItemProps } from '@symlab/react-ui/dist/navigation/SubMenu/SubMenu.types';
import { SubMenu } from '@symlab/react-ui';
import { user } from '../data/errsHttp';

const subNavigation = [
  { name: 'Profile', link: '/profile', icon: UserCircleIcon },
  { name: 'Account', link: '/profile/account', icon: CogIcon },
  { name: 'Password', link: '/profile/password', icon: KeyIcon },
];
const LinkComp = (props: ItemProps) => {
  const { link, className, ...rest } = props;
  return <Link className={className} to={link} {...rest} />;
};

function ProfilePage() {
  const { pathname } = useLocation();
  return (
    <>
      <section className="bg-gray-50 py-8 dark:bg-gray-900">
        <main className="relative ">
          <div className="mx-auto max-w-screen-xl px-4 pb-6 sm:px-6 lg:px-8 lg:pb-16">
            <div className="overflow-hidden rounded-lg bg-white dark:bg-gray-800 dark:border-gray-700 shadow">
              <div className="divide-y divide-transparent lg:grid lg:grid-cols-12 lg:divide-y-0 lg:divide-x">
                <aside className="py-6 lg:col-span-3">
                  <SubMenu
                    items={subNavigation}
                    as={LinkComp}
                    currentPath={pathname}
                    userData={{
                      img: user.imageUrl,
                      name: user.name,
                      lastSesion: '12/12/2022 10:10',
                    }}
                  ></SubMenu>
                </aside>
                <Outlet />
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}

export default ProfilePage;
