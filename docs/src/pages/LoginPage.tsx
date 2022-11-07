import { Button, TextField, PasswordField } from '@symlab/react-ui';

function LoginPage() {
  return (
    <>
      <form>
        <div className="w-full md:w-1/3">
          <TextField label="Email" id="email" type="email" helperText="Your Email here!" />
        </div>
        <div className="w-full md:w-1/3">
          <PasswordField label="Password" id="password" />
        </div>
        <div>
          <a target={'_blank'} href="/recovery-page">
            password recovery
          </a>
        </div>
        <Button type="submit">Login</Button>
      </form>
    </>
  );
}

export default LoginPage;
