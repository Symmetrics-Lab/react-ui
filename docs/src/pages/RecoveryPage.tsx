import { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { useSearchParams } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, TextField, PasswordField, Loading } from '@symlab/react-ui';
import { Link, useNavigate } from 'react-router-dom';
interface FormData {
  email: string;
}

interface FormDataRecovery {
  c1: string;
  c2: string;
  c3: string;
  c4: string;
  password: string;
}

function RecoveryPage() {
  const navigate = useNavigate();
  const [sendEmail, setSendEmail] = useState(false);
  const [searchParams] = useSearchParams();
  const schema = yup.object().shape({
    email: yup.string().email().required(),
  });
  const [loading, isLoading] = useState(false);

  const schemaRecovery = yup.object().shape({
    //email: yup.string().email().required(),
    password: yup.string().required('The password field is required'),
    c1: yup.string().length(1).required(),
    c2: yup.string().length(1).required(),
    c3: yup.string().length(1).required(),
    c4: yup.string().length(1).required(),
  });

  const {
    register,
    //reset,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      email: searchParams.get('email') || '',
    },
    resolver: yupResolver(schema),
  });

  const {
    register: recovery,
    setValue,
    handleSubmit: handleRecovery,
    formState: { errors: errorsRecovery },
  } = useForm<FormDataRecovery>({
    resolver: yupResolver(schemaRecovery),
  });
  /* eslint-disable @typescript-eslint/no-unused-vars */
  const onSubmit = (data: FormData) => {
    isLoading(true);
    setValue('c1', '');
    setTimeout(() => {
      if (!sendEmail) {
        setSendEmail(true);
      }
      isLoading(false);
    }, 3000);
  };

  const onSubmitRecovery = (data: FormDataRecovery) => {
    isLoading(true);
    setTimeout(() => {
      console.log({
        data: {
          email: getValues('email'),
          code: data.c1 + data.c2 + data.c3 + data.c4,
          password: data.password,
        },
      });
      isLoading(false);
      navigate('/login');    
    }, 3000);
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const keyDownHandler = useCallback((event: any) => {
    if (
      ['first', 'second', 'third', 'fourth'].includes(event.target.id) &&
      event.target.nodeName === 'INPUT'
    ) {
      const form = event.target.form;
      const index = Array.prototype.indexOf.call(form, event.target);
      form.elements[index + 1].focus();
      event.preventDefault();
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keyup', keyDownHandler);
    return () => document.removeEventListener('keyup', keyDownHandler);
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
            <div className="px-6 pt-6 space-y-4 md:space-y-6 sm:px-8 sm:pt-8 ">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Forgot your password?
              </h1>
              {sendEmail && <h1 className="text-sm font-bold dark:text-white">OTP Verification</h1>}
              <p className="font-light text-gray-500 dark:text-gray-400">
                {!sendEmail
                  ? 'Dont fret! Just type in your email and we will send you a code to reset your password!'
                  : `We have sent a code to your email ${getValues('email')}, write it here`}
              </p>
            </div>
            {!sendEmail ? (
              <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <div className="w-full">
                  <TextField
                    label="Your email"
                    id="email"
                    type="email"
                    placeholder="name@company.com"
                    {...register('email', { required: 'Please enter your email' })}
                    isValid={(!errors.email?.message && getValues('email') !== '') || false}
                    hasError={errors.email?.message ? true : false}
                    errorText={errors.email?.message}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <Button
                      type="submit"
                      className="text-white 
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
                      Recover
                    </Button>
                  </div>
                  <Link
                    to="/login"
                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Return to login
                  </Link>
                </div>
              </form>
            ) : (
              <form
                onSubmit={handleRecovery(onSubmitRecovery)}
                className="p-6 space-y-4 md:space-y-6 sm:p-8"
              >
                <div id="otp" className="flex flex-row justify-center text-center px-2">
                  <TextField
                    maxLength={1}
                    label=""
                    id="first"
                    type="text"
                    className="m-2 border h-10 w-10 text-center form-control rounded"
                    hasError={!!errorsRecovery.c1?.message}
                    //onChange={keyDownHandler}
                    {...recovery('c1', { required: 'Please enter your name' })}
                  />

                  <TextField
                    maxLength={1}
                    label=""
                    id="second"
                    type="text"
                    className="m-2 border h-10 w-10 text-center form-control rounded"
                    hasError={!!errorsRecovery.c2?.message}
                    {...recovery('c2', { required: 'Please enter your name' })}
                  />
                  <TextField
                    maxLength={1}
                    label=""
                    id="third"
                    type="text"
                    className="m-2 border h-10 w-10 text-center form-control rounded"
                    hasError={!!errorsRecovery.c3?.message}
                    {...recovery('c3', { required: 'Please enter your name' })}
                  />

                  <TextField
                    maxLength={1}
                    label=""
                    id="fourth"
                    type="text"
                    className="m-2 border h-10 w-10 text-center form-control rounded"
                    hasError={!!errorsRecovery.c4?.message}
                    {...recovery('c4', { required: 'Please enter your name' })}
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
                    showValidation
                    {...recovery('password', { required: 'Please enter your password' })}
                    hasError={!!errorsRecovery.password?.message}
                    errorText={errorsRecovery.password?.message}
                  />
                </div>
                <Button
                  type="submit"
                  className="text-white 
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
                  Finish
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default RecoveryPage;
