import { useForm } from 'react-hook-form';
import { Button, TextField, PasswordField } from '@symlab/react-ui';

interface FormData {
  name: string;
  lastname: string;
  email: string;
  phone: number;
  password: string;
}

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full md:w-1/3">
          <TextField
            label="Name"
            id="name"
            type="text"
            helperText="Your name here!"
            hint="Required"
            hasError={!!errors.name?.message}
            errorText={errors.name?.message}
            {...register('name', { required: 'Please enter your name' })}
          />
        </div>
        <div className="w-full md:w-1/3">
          <TextField
            label="Lastname"
            id="Lastname"
            type="text"
            helperText="Your lastname here!"
            hint="Required"
            hasError={!!errors.lastname?.message}
            errorText={errors.lastname?.message}
            {...register('lastname', { required: 'Please enter your lastname' })}
          />
        </div>
        <div className="w-full md:w-1/3">
          <TextField
            label="Email"
            id="email"
            type="email"
            hint="Require"
            helperText="Enter your email"
            {...register('email', { required: 'Please enter your email' })}
            isValid={errors.email?.message ? false : true}
            hasError={errors.email?.message ? true : false}
            errorText={errors.email?.message}
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
          <PasswordField
            label="Password"
            id="password"
            validation={{
              minLength: 8,
              lowerCase: true,
              upperCase: true,
              number: true,
              specialCharacter: true,
            }}
            showValidation
            {...register('password', { required: 'Please enter your password' })}
          />
        </div>
        <Button type="submit">Register</Button>
      </form>
    </>
  );
}

export default RegisterPage;
