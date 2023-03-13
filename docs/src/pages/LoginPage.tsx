import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Alert from '../components/Alert';
import { errsHttp } from '../data/errsHttp';
import { Button, TextField, PasswordField } from '@symlab/react-ui';
import { useEffect, useState } from 'react';
import { LoginForm } from '../interfaces';
import LoadingPage from '../components/LoadingPage';

function LoginPage() {
  const navigate = useNavigate();
  const schema = yup.object().shape({
    email: yup.string().email().required('The email field is required'),
    password: yup.string().required('The password field is required'),
  });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [error, setError] = useState<any>();

  const [loading, isLoading] = useState(false);

  const {
    register,
    getValues,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: LoginForm) => {
    setError(null);
    isLoading(true);
    setTimeout(() => {
      console.log(data);
      const resp = errsHttp[Math.floor(Math.random() * errsHttp.length)];
      isLoading(false);
      resp.code !== 200 ? setError(resp) : navigate('/');
    }, 3000);
  };
  useEffect(() => {
    setError(null);
    reset({
      email: '',
      password: '',
    });
  }, []);

  return (
    <>
      {loading && (
          <LoadingPage />
      )}

      <section className="bg-sym-wallpaper py-8 dark:bg-sym-wallpaper-dark">
        <div className="flex flex-col items-center justify-center px-6 py-0 mx-auto h-full lg:py-0">
          <div className="w-full h-full bg-sym-layout rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 dark:bg-sym-layout-dark dark:border-border-dark border-border">
            <div className="text-center	px-6 pt-6 space-y-4 md:space-y-6 sm:px-8 sm:pt-8">
              <img
                className="inline w-12 h-12 mr-2"
                src="https://symlab.io/foot-icon.svg"
                alt="logo"
              />
              <h1 className="font-Raleway font-bold text-xl leading-tight tracking-tight text-sym-txt-primary md:text-2xl dark:text-sym-txt-primary-dark">
                SYMLAB
              </h1>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <div className="w-full">
                <TextField
                  label=""
                  id="email"
                  type="email"
                  placeholder="Email"
                  {...register('email', { required: 'Please enter your email' })}
                  isValid={(!errors.email?.message && getValues('email') !== '') || false}
                  hasError={errors.email?.message ? true : false}
                  errorText={errors.email?.message}
                />
              </div>
              <div className="w-full">
                <PasswordField
                  label=""
                  id="password"
                  placeholder="Password"
                  hasError={!!errors.password?.message}
                  errorText={errors.password?.message}
                  {...register('password', { required: 'Please enter your password' })}
                />
              </div>
              <div className="flex items-center justify-end">
                <Link
                  to="/recovery-page"
                  className="text-sm font-medium text-sym-primary hover:underline dark:text-sym-primary-dark"
                >
                  Forgot password?
                </Link>
              </div>
              {error && <Alert code={error?.code} message={error?.message} setError={setError} />}
              <Button
                type="submit"
                className="w-full button-symlab focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center focus:ring-0 focus:ring-offset-0"
              >
                Login
              </Button>

              <p className="text-sm font-light text-sym-secondary-gray dark:text-sym-secondary-gray-dark">
                Don’t have an account yet?
                <Link
                  to="/register"
                  className="font-medium text-sym-primary hover:underline dark:text-sym-primary-dark ml-2"
                >
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default LoginPage;
