import { Button, TextField } from '@symlab/react-ui';
import { EnvelopeIcon } from '@heroicons/react/20/solid';

function HomePage() {
  return (
    <>
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
      <div className="w-1/3">
        <TextField
          label="Name"
          id="name"
          name="name"
          type="text"
          defaultValue="Hello"
          hint="Optional"
          helperText="Your name here!"
        />
      </div>
      <div className="w-1/3">
        <TextField
          label="Last Name"
          id="lastname"
          name="lastname"
          type="text"
          defaultValue="Last"
          placeholder="Last Name"
          hasError
          errorText="Field required"
          required
        />
      </div>
      <div className="w-1/3">
        <TextField
          label="Email"
          id="email"
          name="email"
          type="email"
          defaultValue="hello@fun.com"
          hint="Required"
          helperText="Your name here!"
          isValid
        />
      </div>
    </>
  );
}

export default HomePage;
