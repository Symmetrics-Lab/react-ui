import { Button, NavBar, Logo, TopMenu } from '@symlab/react-ui';
import { EnvelopeIcon } from '@heroicons/react/20/solid';

const items = [
  {
    label: 'Home',
    link: '/',
    current: true,
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

const LogoElement = () => (
  <Logo src="https://symlab.io/foot-icon.svg" alt="SymLab" href="/" title="Go to home page" />
);

function App() {
  return (
    <main>
      <NavBar logo={<LogoElement />} leftItems={<TopMenu items={items} />} />
      <div className="p-4">
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
      </div>
    </main>
  );
}

export default App;
