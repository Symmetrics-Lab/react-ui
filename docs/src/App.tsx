import { Button, NavBar, Logo } from '@symlab/react-ui';
import { EnvelopeIcon } from '@heroicons/react/20/solid';

const LogoElement = () => (
  <Logo src="https://symlab.io/foot-icon.svg" alt="SymLab" href="/" title="Go to home page" />
);

function App() {
  return (
    <main>
      <NavBar logo={<LogoElement />} />
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
