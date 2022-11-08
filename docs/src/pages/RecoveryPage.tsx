import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, TextField } from '@symlab/react-ui';

interface FormData {
  email: string;
}

function RecoveryPage() {
  const schema = yup.object().shape({
    email: yup.string().email().required(),
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
    </>
  );
}

export default RecoveryPage;
