import { Button } from '@symlab/components';

function App() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Button text="Click me" size="md" disabled onClick={() => console.log('click')} />
    </div>
  );
}

export default App;
