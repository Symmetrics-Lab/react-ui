import { useForm } from 'react-hook-form';
import { Button, TextField } from '@symlab/react-ui';

interface FormData {
  email: string;
}

function RecoveryPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
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

        <Button type="submit">Recovery</Button>
      </form>
    </>
  );
}

export default RecoveryPage;
