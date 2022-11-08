import { useForm } from 'react-hook-form';
import { Button, TextField, PasswordField } from '@symlab/react-ui';

interface FormData {
  email: string;
  password: string;
}

function LoginPage() {
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
            <p>
              ¿Olvidaste tu contraseña? -&gt;{' '}
              <a href="/recovery-page" style={{ color: 'blue' }}>
                Recuperar contraseña
              </a>
            </p>
            <p>
              ¿No tienes una cuenta? -&gt;{' '}
              <a href="/register" style={{ color: 'blue' }}>
                {' '}
                registro
              </a>
            </p>
          </div>
          <Button type="submit">Login</Button>
        </form>
      </div>
    </>
  );
}

export default LoginPage;
