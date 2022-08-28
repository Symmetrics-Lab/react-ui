import { Button } from '@symlab/components';
import { EnvelopeIcon } from '@heroicons/react/20/solid';

function App() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Button
        text="Click me"
        size="md"
        onClick={() => console.log('click')}
        icon={EnvelopeIcon}
        iconPosition="left"
        arial-label="Click me"
      />
    </div>
  );
}

export default App;
