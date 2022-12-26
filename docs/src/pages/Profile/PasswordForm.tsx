import { PasswordField, Button, Loading } from '@symlab/react-ui';
import { useEffect, useState } from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import { changePassword } from '../../interfaces';
import { errsHttp } from '../../data/errsHttp';
import Alert from '../../components/Alert';

export default function PasswordForm() {
  const schema = yup.object().shape({
    oldPassword: yup.string().required('The old password field is required'),
    newPassword: yup.string().required('The new password is required'),
  });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [error, setError] = useState<any>();
  const [loading, isLoading] = useState(false);

  const {
    register: changePassword,
    handleSubmit,
    formState: { errors },
  } = useForm<changePassword>({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    setError(null);
  }, []);

  const onSubmit = (data: changePassword) => {
    isLoading(true);
    setError(null);
    setTimeout(() => {
      console.log(data);
      const resp = errsHttp[Math.floor(Math.random() * errsHttp.length)];
      isLoading(false);
      resp.code !== 200 && setError(resp);
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
      <form onSubmit={handleSubmit(onSubmit)} className="lg:col-span-9">
        <div className="py-6 px-4 sm:p-6 lg:pb-8">
          {error && (
            <div className="py-6">
              <Alert code={error?.code} message={error?.message} setError={setError} />
            </div>
          )}
          <div className="pb-10">
            <h2 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">
              Change password
            </h2>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">
              In the following form you can change the password of your account.
            </p>
          </div>
          <div className="flex-grow space-y-6 relative">
            <div className="w-full">
              <PasswordField
                label="Old Password"
                id="oldPassword"
                required
                {...changePassword('oldPassword', { required: 'Please enter your password' })}
                hasError={!!errors.oldPassword?.message}
                errorText={errors.oldPassword?.message}
              />
            </div>
          </div>
          <div className="flex-grow space-y-6 relative">
            <div className="w-full">
              <PasswordField
                label="New Password"
                id="newPassword"
                required
                validation={{
                  minLength: 8,
                  lowerCase: true,
                  upperCase: true,
                  number: true,
                  specialCharacter: true,
                }}
                showValidation
                {...changePassword('newPassword', { required: 'Please enter your password' })}
                hasError={!!errors.newPassword?.message}
                errorText={errors.newPassword?.message}
              />
            </div>
          </div>
          <div className=" py-8 flex flex-col items-center justify-center">
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
              Change
            </Button>
          </div>
        </div>
      </form>
    </>
  );
}
