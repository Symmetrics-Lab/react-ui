import { Button, TextField, PasswordField } from '@symlab/react-ui';

function RegisterPage() {
  return (
    <>
      <form>
        <div className="w-full md:w-1/3">
          <TextField label="Name" id="name" type="text" helperText="Your name here!" />
        </div>
        <div className="w-full md:w-1/3">
          <TextField label="LastName" id="Lastname" type="text" helperText="Your lastname here!" />
        </div>
        <div className="w-full md:w-1/3">
          <PasswordField label="passsword" id="password" />
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </>
  );
}

export default RegisterPage;
