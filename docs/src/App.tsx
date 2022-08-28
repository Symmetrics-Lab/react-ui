import { Button } from '@symlab/components';
import { EnvelopeIcon } from '@heroicons/react/20/solid';

function App() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Button
        text="Click me"
        size="xl"
        onClick={() => console.log('click')}
        icon={EnvelopeIcon}
        iconPosition="left"
      />
    </div>
  );
}

export default App;
