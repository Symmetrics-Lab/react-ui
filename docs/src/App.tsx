import { Button } from '@symlab/react-ui';
import { EnvelopeIcon } from '@heroicons/react/20/solid';

function App() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Button
        onPress={() => console.log('click')}
        arial-label="Click me"
        iconPosition="left"
        icon={EnvelopeIcon}
        type="submit"
        isDisabled
      >
        Click Me
      </Button>
    </div>
  );
}

export default App;
