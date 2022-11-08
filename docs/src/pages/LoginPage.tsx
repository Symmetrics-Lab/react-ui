import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, TextField, PasswordField } from '@symlab/react-ui';

interface FormData {
  email: string;
  password: string;
}

function LoginPage() {
  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: FormData) => {
    console.log(data);
  };
  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full md:w-1/3">
            <TextField
              label="Email"
              id="email"
              type="email"
              helperText="Your Email here!"
              {...register('email', { required: 'Please enter your email' })}
              isValid={errors.email?.message ? false : true}
              hasError={errors.email?.message ? true : false}
              errorText={errors.email?.message}
            />
          </div>
          <div className="w-full md:w-1/3">
            <PasswordField
              label="Password"
              id="password"
              {...register('password', { required: 'Please enter your password' })}
            />
          </div>
          <div className="w-full md:w-1/3 ">
            <Link to="/recovery-page">¿Olvidaste tu contraseña?</Link> <br />
            <Link to="/register">¿No tienes una cuenta?</Link>
          </div>
          <Button type="submit">Login</Button>
        </form>
      </div>
    </>
  );
}

export default LoginPage;
