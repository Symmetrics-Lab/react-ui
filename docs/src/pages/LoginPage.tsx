import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Alert from '../components/Alert';
import { errsHttp } from '../data/errsHttp';
import { Button, TextField, PasswordField, Loading } from '@symlab/react-ui';
import { useEffect, useState } from 'react';
import { LoginForm } from '../interfaces';


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
      {loading && (
        <Loading>
          <svg
            aria-hidden="true"
            className="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-white fill-blue-600 dark:fill-blue-400"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
        </Loading>
      )}

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
