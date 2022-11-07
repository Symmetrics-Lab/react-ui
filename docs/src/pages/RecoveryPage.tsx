import { Button, TextField } from '@symlab/react-ui';

function RecoveryPage() {
  return (
    <>
      <form>
        <div className="w-full md:w-1/3">
          <TextField label="Email" id="email" type="email" helperText="Your Email here!" />
        </div>

        <Button type="submit">Submit</Button>
      </form>
    </>
  );
}

export default RecoveryPage;
