import { Textarea, TextField, Autocomplete, Button, Loading } from '@symlab/react-ui';
import { useEffect, useState } from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { organizationType, RegisterForm } from '../../interfaces';
import { errsHttp, roles, user } from '../../data/errsHttp';
import Alert from '../../components/Alert';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ProfileForm() {
  const PHONE_NO_REGEX = /^[0-9\- ]{8,14}$/;

  const schema = yup.object().shape({
    email: yup.string().email().required('The email field is required'),
    name: yup.string().required('The name field is required'),
    lastname: yup.string().required('The lastname field is required'),
    //password: yup.string().required('The password field is required'),
    phone: yup
      .string()
      .matches(PHONE_NO_REGEX, { message: 'Invalid phone number', excludeEmptyString: true }),
    role: yup.number().required('The role field is required'),
    organization: yup.number().required('The organization field is requiredo'),
  });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [error, setError] = useState<any>();
  const [loading, isLoading] = useState(false);
  const [selectedOrganization, setSelectedOrganization] = useState<organizationType>();
  const [selectedRole, setSelectedRole] = useState<organizationType>();
  const [image, setImage] = useState('');
  const {
    register,
    setValue,
    getValues,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterForm>({
    resolver: yupResolver(schema),
  });
  const imageUrl = watch('imageUrl');
  const organizations: organizationType[] = [
    { id: 1, name: 'Gitub' },
    { id: 2, name: 'Gitlab' },
    { id: 3, name: 'Symlab' },
  ];

  useEffect(() => {
    setError(null);
    setSelectedOrganization(organizations.find((i) => i.id === user.organization));
    setSelectedRole(roles.find((i) => i.id === user.role));
    setValue('email', user.email);
    setValue('name', user.name);
    setValue('lastname', user.lastname);
    setValue('about', user.about);
    setValue('imageUrl', user.imageUrl);
    setValue('organization', user.organization);
    setValue('role', user.role);
    setImage('');
  }, []);

  const onSubmit = (data: RegisterForm) => {
    console.log({ data });
    isLoading(true);
    setError(null);
    setTimeout(() => {
      console.log(data);
      const resp = errsHttp[Math.floor(Math.random() * errsHttp.length)];
      isLoading(false);
      resp.code !== 200 && setError(resp);
    }, 3000);
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const convertbase64 = (file: any) => {
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result?.toString() || '');
    };
    reader.readAsDataURL(file);
  };

  useEffect(() => {
    typeof imageUrl === 'object' &&
      typeof getValues('imageUrl') === 'object' &&
      convertbase64(imageUrl[0]);
  }, [imageUrl]);

  return (
    <>
      {loading && (
        <Loading>
          <svg
            aria-hidden="true"
            className="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-white fill-primary dark:fill-primary-dark"
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
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="divide-y divide-gray-200 dark:divide-gray-700 lg:col-span-9"
      >
        {/* Profile section */}
        <div className="py-6 px-4 sm:p-6 lg:pb-8">
          {error && (
            <div className="py-6">
              {' '}
              <Alert code={error?.code} message={error?.message} setError={setError} />
            </div>
          )}

          <div>
            <h2 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">Profile</h2>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">
              This information will be displayed publicly so be careful what you share.
            </p>
          </div>

          <div className="mt-6 flex flex-col lg:flex-row">
            <div className="mt-6 flex-grow">
              <p className="text-sm font-medium dark:text-white text-gray-700" aria-hidden="true">
                Profile picture
              </p>
              <div className="relative overflow-hidden rounded-full">
                <img
                  className="relative h-40 w-40 rounded-full"
                  src={image || user.imageUrl}
                  alt=""
                />
                <label
                  htmlFor="imageUrl"
                  className="absolute inset-0 flex h-40 w-40 rounded-full items-center justify-center bg-black bg-opacity-75 text-sm font-medium text-white opacity-0 focus-within:opacity-100 hover:opacity-100"
                >
                  <span>Change</span>
                  <span className="sr-only"> user photo</span>
                  <input
                    type="file"
                    id="imageUrl"
                    {...register('imageUrl', { required: true })}
                    className="absolute inset-0 h-full w-full cursor-pointer rounded-md border-gray-300 dark:border-gray-600 opacity-0"
                  />
                </label>
              </div>
            </div>
            <div className="flex-grow space-y-6 relative">
              <div>
                <TextField
                  label="Email"
                  id="emailValid"
                  type="email"
                  hasError={!!errors.email?.message}
                  errorText={'correo invalido'}
                  placeholder="ex. john@doe.com"
                  disabled
                  {...register('email', { required: true })}
                />
              </div>

              <div>
                <div className="mt-1">
                  <Textarea
                    id="about"
                    label="About"
                    hideLabel={false}
                    minRows={3}
                    hasError={!!errors.about?.message}
                    errorText={errors.about?.message}
                    {...register('about', { required: true })}
                  />
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  Brief description for your profile. URLs are hyperlinked.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-12 gap-6">
            <div className="col-span-12 sm:col-span-6">
              <TextField
                label="Name"
                id="name"
                type="text"
                hasError={!!errors.name?.message}
                errorText={errors.name?.message}
                {...register('name', { required: 'Please enter your name' })}
              />
            </div>

            <div className="col-span-12 sm:col-span-6">
              <TextField
                label="Last name"
                id="lastname"
                type="text"
                hasError={!!errors.lastname?.message}
                errorText={errors.lastname?.message}
                {...register('lastname', { required: 'Please enter your lastname' })}
              />
            </div>
            <div className="col-span-12 sm:col-span-12">
              <TextField
                label="Phone"
                id="phone"
                type="tel"
                hint="Optional"
                {...register('phone')}
                hasError={!!errors.phone?.message}
                errorText={errors.phone?.message}
              />
            </div>

            <div className="col-span-12 sm:col-span-6">
              <Autocomplete
                id="Company"
                label={'Company'}
                value={{ labelField: 'name', data: selectedOrganization }}
                setValue={setSelectedOrganization}
                options={organizations}
                control={control}
                hasError={!!errors.organization?.message}
                errorText={errors.organization?.message}
                placeholder="Seleccione una opción"
                variant='secondary'
                onForm={true}
                {...register('organization', { required: true })}
              />
            </div>
          </div>
        </div>

        {/* Privacy section */}
        <div className="divide-gray-200 pt-6">
          <div className="px-4 sm:px-6">
            <div>
              <h2 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">Role</h2>
              <p className="mt-1 text-sm text-gray-500">
                Ornare eu a volutpat eget vulputate. Fringilla commodo amet.
              </p>
            </div>
            <div className="mt-8 col-span-12 sm:col-span-6">
              <Autocomplete
                id="role"
                value={{ labelField: 'name', data: selectedRole }}
                setValue={setSelectedRole}
                options={roles}
                control={control}
                hasError={!!errors.role?.message}
                errorText={errors.role?.message}
                placeholder="Seleccione una opción"
                onForm={true}
                {...register('role', { required: true })}
              />
            </div>
          </div>
          <div className="mt-4 flex justify-end py-4 px-4 sm:px-6">
            {/*             <button
              type="button"
              className="inline-flex justify-center rounded-md border border-gray-300 dark:border-gray-600 bg-sym-layout py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-sym-wallpaper focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
            >
              Cancel
            </button> */}

            <Button
              type="submit"
              className="ml-5  text-white 
              button-symlab
              focus:outline-none 
              font-medium rounded-lg text-sm px-5 py-2.5 text-center 
              focus:ring-0 focus:ring-offset-0
              "
            >
              Save
            </Button>
          </div>
        </div>
      </form>
    </>
  );
}
