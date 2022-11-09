import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { Link, useSearchParams } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, TextField, PasswordField } from '@symlab/react-ui';

interface FormData {
  email: string;
  password: string;
}

function RecoveryPage() {
  const [sendEmail, setSendEmail] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
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
    console.log(data.email);
    const DataEmail = data.email;
    setSearchParams(DataEmail);
    setSendEmail(true);
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
            <TextField label="Code" id="codeEmail" type="text" helperText="Your code here!" />
          </div>
          <div className="w-full md:w-1/3">
            <PasswordField
              label="Password"
              id="password"
              showValidation
              {...register('password', { required: 'Please enter your password' })}
            />
          </div>
          <Button type="submit">change</Button>
        </form>
      )}
    </>
  );
}

export default RecoveryPage;
