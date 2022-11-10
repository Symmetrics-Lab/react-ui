import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { useSearchParams } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, TextField, PasswordField } from '@symlab/react-ui';

interface FormData {
  email: string;
  code: string;
  password: string;
}

function RecoveryPage() {
  const [sendEmail, setSendEmail] = useState(false);
  const [searchParams] = useSearchParams();
  const schema = yup.object().shape({
    email: yup.string().email().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      email: searchParams.get('email') || '',
    },

    resolver: yupResolver(schema),
  });
  const onSubmit = (data: FormData) => {
    if (sendEmail === false && !data.code && !data.password) {
      setSendEmail(true);
      console.log(data);
      return;
    }

    if (sendEmail && data.code && data.password) {
      console.log(data, 'Se ha cambiado la clave');
    }
  };

  return (
    <>
      {!sendEmail ? (
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

          <Button type="submit">Recover</Button>
        </form>
      ) : (
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
            <TextField
              label="Code"
              id="codeEmail"
              type="text"
              helperText="Your code here!"
              {...register('code', { required: 'Please enter your code' })}
            />
          </div>
          <div className="w-full md:w-1/3">
            <PasswordField
              label="Password"
              id="password"
              showValidation
              {...register('password', { required: 'Please enter your password' })}
            />
          </div>
          <Button href="/login" type="submit">
            change
          </Button>
        </form>
      )}
    </>
  );
}

export default RecoveryPage;
