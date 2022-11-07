import { Button, TextField, PasswordField } from '@symlab/react-ui';

function RegisterPage() {
  return (
    <>
      <form>
        <div className="w-full md:w-1/3">
          <TextField
            label="Name"
            id="name"
            type="text"
            helperText="Your name here!"
            hint="Required"
          />
        </div>
        <div className="w-full md:w-1/3">
          <TextField
            label="LastName"
            id="Lastname"
            type="text"
            helperText="Your lastname here!"
            hint="Required"
          />
        </div>
        <div className="w-full md:w-1/3">
          <TextField
            label="Email"
            id="email"
            type="email"
            hint="Require"
            helperText="Enter your email"
          />
        </div>
        <div className="w-full md:w-1/3">
          <TextField
            label="Phone"
            id="number"
            type="number"
            hint="Optional"
            helperText="Enter your Phone"
          />
        </div>

        <div className="w-full md:w-1/3">
          <PasswordField label="Password" id="password" hint="Require" />
        </div>
        <Button type="submit">Register</Button>
      </form>
    </>
  );
}

export default RegisterPage;
