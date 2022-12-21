import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, TextField, PasswordField } from '../../../library/src';
import { useEffect, useState } from 'react';
import Alert from '../components/Alert';
import { errsHttp } from '../data/errsHttp';

interface FormData {
  email: string;
  password: string;
}

function LoginPage() {
  const navigate = useNavigate();
  const schema = yup.object().shape({
    email: yup.string().email().required('The email field is required'),
    password: yup.string().required('The password field is required'),
  });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [error, setError] = useState<any>();

  const {
    register,
    getValues,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: FormData) => {
    setError(null);
    setTimeout(() => {
      console.log(data);
      const resp = errsHttp[Math.floor(Math.random() * errsHttp.length)];
      resp.code !== 200 ? setError(resp): navigate('/');
      
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
      <section className="bg-gray-50 py-8 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-0 mx-auto h-full lg:py-0">
          <div className="w-full h-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="text-center	px-6 pt-6 space-y-4 md:space-y-6 sm:px-8 sm:pt-8">
              <img
                className="inline w-12 h-12 mr-2"
                src="https://symlab.io/foot-icon.svg"
                alt="logo"
              />
              <h1 className="font-Raleway font-bold text-xl leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
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
                  className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Forgot password?
                </Link>
              </div>
              {error && <Alert code={error?.code} message={error?.message} setError={setError} />}
              <Button
                type="submit"
                className="w-full text-white 
                bg-gradient-to-b from-symlab-purple-300 to-blue-400
                hover:from-symlab-purple-300 hover:to-symlab-purple-300
                border-none
                hover:bg-symlab-purple-200  
                dark:hover:bg-symlab-purple-300 
                focus:outline-none 
                font-medium rounded-lg text-sm px-5 py-2.5 text-center 
                focus:ring-0 focus:ring-offset-0
                "
              >
                Login
              </Button>

              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?
                <Link
                  to="/register"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500 ml-2"
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
