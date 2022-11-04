import { Button, TextField, Input, Label, PasswordField } from '@symlab/react-ui';

function LoginPage() {
  return (
    <>
      <form>
        <div className="w-full md:w-1/3">
          <TextField label="Email" id="email" type="email" helperText="Your Email here!" />
        </div>
        <div className="w-full md:w-1/3">
          <PasswordField label="passsword" id="password" />
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </>
  );
}

export default LoginPage;
