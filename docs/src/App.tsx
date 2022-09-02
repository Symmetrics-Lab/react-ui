import { Button } from '@symlab/react-ui';
import { EnvelopeIcon } from '@heroicons/react/20/solid';

function App() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Button
        text="Click me"
        onPress={() => console.log('click')}
        arial-label="Click me"
        iconPosition="right"
        icon={EnvelopeIcon}
        type="submit"
      />
    </div>
  );
}

export default App;
