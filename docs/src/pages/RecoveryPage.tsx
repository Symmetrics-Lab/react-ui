import { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { useSearchParams } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, TextField, PasswordField } from '@symlab/react-ui';
import { Link } from 'react-router-dom';
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
  const [sendEmail, setSendEmail] = useState(false);
  const [searchParams] = useSearchParams();
  const schema = yup.object().shape({
    email: yup.string().email().required(),
  });

  const schemaRecovery = yup.object().shape({
    email: yup.string().email().required(),
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
    setValue('c1', '');
    setTimeout(() => {
      if (!sendEmail) {
        setSendEmail(true);
      }
    }, 3000);
  };

  const onSubmitRecovery = (data: FormDataRecovery) => {
    console.log('sjsj')
    setTimeout(() => {
      console.log({
        data: {
          email: getValues('email'),
          code: data.c1 + data.c2 + data.c3 + data.c4,
          password: data.password,
        },
      });
     // history(to:'/');
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
