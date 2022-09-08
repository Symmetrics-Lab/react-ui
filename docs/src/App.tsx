import { Button, NavBar, Logo, TopMenu, Dropdown } from '@symlab/react-ui';
import { EnvelopeIcon, UserIcon } from '@heroicons/react/20/solid';
import { BellIcon } from '@heroicons/react/24/outline';

const items = [
  {
    label: 'Home',
    link: '/',
    current: true,
  },
  {
    label: 'About',
    link: '/about',
    current: false,
  },
  {
    label: 'Contact',
    link: '/contact',
    current: false,
  },
];

const LogoElement = () => (
  <Logo src="https://symlab.io/foot-icon.svg" alt="SymLab" href="/" title="Go to home page" />
);

function App() {
  return (
    <div>
      <NavBar
        logo={<LogoElement />}
        leftItems={<TopMenu items={items} />}
        rightItems={
          <>
            <button
              type="button"
              className="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <span className="sr-only">View notifications</span>
              <BellIcon className="h-6 w-6" aria-hidden="true" />
            </button>
            <Dropdown
              srLabel="Open Profile"
              icon={<UserIcon className="text-gray-700 h-8 w-8" />}
            />
          </>
        }
        itemsMobile={items}
      />
      <main className="p-4">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <Button
          onPress={() => console.log('click')}
          arial-label="Click me"
          iconPosition="left"
          icon={EnvelopeIcon}
          type="submit"
          isLoading
          loadingContent="Loading"
        >
          Click Me
        </Button>
      </main>
    </div>
  );
}

export default App;
