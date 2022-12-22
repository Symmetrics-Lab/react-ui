import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, TextField, PasswordField, Loading } from '@symlab/react-ui';
import { useState } from 'react';

interface FormData {
  name: string;
  lastname: string;
  email: string;
  phone: number;
  password: string;
}
const PHONE_NO_REGEX = /^[0-9\- ]{8,14}$/;

function RegisterPage() {
  const schema = yup.object().shape({
    name: yup.string().required('The name field is required'),
    email: yup.string().email().required('The email field is required'),
    lastname: yup.string().required('The lastname field is required'),
    password: yup.string().required('The password field is required'),
    phone: yup
      .string()
      .matches(PHONE_NO_REGEX, { message: 'Invalid phone number', excludeEmptyString: true }),
  });
  const navigate = useNavigate();
  const [loading, isLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    isLoading(true);
    console.log(data);
    setTimeout(() => {
      isLoading(false);
      navigate('/login');
    }, 3000);
  };

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
            <div className="px-6 pt-6 space-y-4 md:space-y-6 sm:px-8 sm:pt-8 text-center">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign up
              </h1>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <div className="w-full">
                <TextField
                  isValid={true}
                  label="Name"
                  id="name"
                  type="text"
                  value={'Symlab'}
                  helperText="Your name here!"
                  hint="Required"
                  hasError={!!errors.name?.message}
                  errorText={errors.name?.message}
                  {...register('name', { required: 'Please enter your name' })}
                />
              </div>
              <div className="w-full">
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
              <div className="w-full">
                <TextField
                  label="Email"
                  id="email"
                  type="email"
                  hint="Required"
                  helperText="Enter your email"
                  {...register('email', { required: 'Please enter your email' })}
                  hasError={!!errors.email?.message}
                  errorText={errors.email?.message}
                />
              </div>
              <div className="w-full">
                <TextField
                  label="Phone"
                  id="phone"
                  type="tel"
                  hint="Optional"
                  helperText="Enter your Phone"
                  {...register('phone')}
                  hasError={!!errors.phone?.message}
                  errorText={errors.phone?.message}
                />
              </div>

              <div className="w-full">
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
                  message={'Excellent!'}
                  showValidation
                  {...register('password', { required: 'Please enter your password' })}
                  hasError={!!errors.password?.message}
                  errorText={errors.password?.message}
                />
              </div>
              <Button
                type="submit"
                className="w-full text-white 
                bg-gradient-to-b from-symlab-purple-300 to-blue-400
                hover:from-symlab-purple-300 hover:to-symlab-purple-300
                border-none
                hover:bg-symlab-purple-200  
                focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center focus:ring-0 focus:ring-offset-0"
              >
                Register
              </Button>

              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?
                <Link
                  to="/login"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500 ml-2"
                >
                  Login here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default RegisterPage;
