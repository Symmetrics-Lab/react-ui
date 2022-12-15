import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, TextField, PasswordField } from '@symlab/react-ui';

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
