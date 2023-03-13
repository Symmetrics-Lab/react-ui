import { PasswordField, Button } from '@symlab/react-ui';
import { useEffect, useState } from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import { changePassword } from '../../interfaces';
import { errsHttp } from '../../data/errsHttp';
import Alert from '../../components/Alert';
import LoadingPage from '../../components/LoadingPage';

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
       <LoadingPage />
      )}
      <form onSubmit={handleSubmit(onSubmit)} className="lg:col-span-9">
        <div className="py-6 px-4 sm:p-6 lg:pb-8">
          {error && (
            <div className="py-6">
              <Alert code={error?.code} message={error?.message} setError={setError} />
            </div>
          )}
          <div className="pb-10">
            <h2 className="text-lg font-medium leading-6 text-sym-txt-primary dark:text-sym-txt-primary-dark">
              Change password
            </h2>
            <p className="mt-1 text-sm text-sym-secondary-gray dark:text-sym-secondary-gray-dark">
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
              className="
                    bg-symlab
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
