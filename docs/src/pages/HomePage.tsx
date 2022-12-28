import { useForm } from 'react-hook-form';
import { Button, TextField, Input, Label, PasswordField, Table } from '@symlab/react-ui';
import { EnvelopeIcon } from '@heroicons/react/20/solid';
import BasicTable from '../components/datatable/BasicTable';
import SortingTable from '../components/datatable/SortingTable';
import FilteringTable from '../components/datatable/FilteringTable';
import PaginationTable from '../components/datatable/PaginationTable';
import RowSelection from '../components/datatable/RowSelection';
import ColumnHiding from '../components/datatable/ColumnHiding';
import { COLUMNS } from '../components/datatable/columns';
import MOCK_DATA from './../data/MOCK_DATA.json';

interface FormData {
  name: string;
  lastname: string;
  email: string;
  country: string;
  password: string;
}

function HomePage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = (data: FormData) => console.log(data);
  return (
    <>
      {/*  <BasicTable/> */}
      {/* <SortingTable /> */}
      {/*   <FilteringTable /> */}
      {/*   <PaginationTable /> */}
      {/* <RowSelection/> */}
      {/* <ColumnHiding /> */}

      <Table
        title="Detalle de las personas"
        options={{
          filtering: true,
          sorting: true,
          footer: true,
          //pageSize: 10,
          pageSizeOptions: [10, 100, 500, 1000],
          hiddenColumns: ['country'],
        }}
        columns={COLUMNS}
        data={MOCK_DATA}
      />

      <Button
        onPress={() => console.log('click')}
        arial-label="Click me"
        iconPosition="left"
        icon={EnvelopeIcon}
        type="submit"
        isLoading
        loadingContent="Loading"
      >
        Click Me
      </Button>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full md:w-1/3">
          <TextField
            label="Name"
            id="name"
            type="text"
            defaultValue="Hello"
            hint="Optional"
            helperText="Your name here!"
            hasError={!!errors.name}
            errorText={errors.name?.message}
            {...register('name', { required: 'Please enter your name' })}
          />
        </div>
        <div className="w-full md:w-1/3">
          <TextField
            label="Last Name"
            id="lastname"
            type="text"
            defaultValue="Last"
            placeholder="Last Name"
            hasError={!!errors.lastname}
            errorText={errors.lastname?.message}
            required
            readOnly
            {...register('lastname', { required: 'Please enter your last name' })}
          />
        </div>
        <div className="w-full md:w-1/3">
          <TextField
            label="Email"
            id="email"
            type="email"
            defaultValue="hello@fun.com"
            hint="Required"
            helperText="Your name here!"
            isValid
            {...register('email', { required: 'Please enter your email' })}
          />
        </div>
        <div className="w-full md:w-1/3">
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
            {...register('password', { required: 'Please enter your password' })}
          />
        </div>
        <div className="w-full md:w-1/3 my-2">
          <Label id="country" text="Country" required />
          <Input
            id="country"
            defaultValue="United States"
            type="text"
            {...register('country', { required: 'Please enter your email' })}
          />
        </div>
        <Button type="submit">Submit</Button>
      </form>
      <div></div>
    </>
  );
}

export default HomePage;
