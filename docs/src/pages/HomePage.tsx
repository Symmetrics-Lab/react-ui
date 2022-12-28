import { useForm } from 'react-hook-form';
import {
  Button,
  TextField,
  Input,
  Label,
  PasswordField,
  Table,
  TableFilterRow,
  EditableCell,
} from '@symlab/react-ui';
import { EnvelopeIcon } from '@heroicons/react/20/solid';
import BasicTable from '../components/datatable/BasicTable';
import SortingTable from '../components/datatable/SortingTable';
import FilteringTable from '../components/datatable/FilteringTable';
import PaginationTable from '../components/datatable/PaginationTable';
import RowSelection from '../components/datatable/RowSelection';
import ColumnHiding from '../components/datatable/ColumnHiding';
import { COLUMNS } from '../components/datatable/columns';
import MOCK_DATA from './../data/MOCK_DATA.json';
import { format } from 'date-fns';
import { useEffect, useState } from 'react';

interface Iperson {
  id: number;
  first_name: string;
  last_name: string;
  date_of_birth: string;
  country: string;
  phone: string;
}
interface FormData {
  name: string;
  lastname: string;
  email: string;
  country: string;
  password: string;
  person: Iperson[];
}

function HomePage() {
  const [data, setData] = useState(MOCK_DATA);
  const [skipPageReset, setSkipPageReset] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      person: data,
    },
  });

  useEffect(() => {
    register('person');
  }, [register]);

  useEffect(() => {
    setSkipPageReset(false);
  }, [data]);

  const onSubmit = (data: FormData) => console.log(data);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const personValues: any[] = watch('person');
  const updateData = (index: number, id: string, value: string) => {
    setSkipPageReset(true);
    personValues[index][id] = value;

    //setData({ ...personValues });
    setData((old) =>
      old.map((row, item) => {
        if (item === index) {
          return {
            ...old[index],
            [id]: value,
          };
        }
        return row;
      })
    );

    setValue('person', { ...personValues });
  };
  const resetData = () => {
    setValue('person', MOCK_DATA);
    setData(MOCK_DATA);
  };

  return (
    <>
      {/*  <BasicTable/> */}
      {/* <SortingTable /> */}
      {/*   <FilteringTable /> */}
      {/*   <PaginationTable /> */}
      {/* <RowSelection/> */}
      {/* <ColumnHiding /> */}

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
        <button onClick={resetData}>Reset Data</button>
        <Table
          {...register}
          ref={register}
          title="Detalle de las personas"
          options={{
            filtering: true,
            sorting: true,
            footer: true,
            //pageSize: 10,
            pageSizeOptions: [10, 100, 500, 1000],
            hiddenColumns: ['country'],
            skipPageReset,
          }}
          columns={[
            {
              Header: 'Id',
              Footer: 'Id',
              accessor: 'id',
              disableFilters: true,
            },
            {
              Header: 'First Name',
              Footer: 'First Name',
              accessor: 'first_name',
              Filter: TableFilterRow,
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              Cell: (data: any) => {
                //return data.row.original.offeredVolume;
                return (
                  <EditableCell
                    // eslint-disable-next-line react/destructuring-assignment
                    editable={true}
                    {...data}
                    recordValue={updateData}
                  />
                );
              },
            },
            {
              Header: 'Last Name',
              Footer: 'Last Name',
              accessor: 'last_name',
              Filter: TableFilterRow,
            },
            {
              Header: 'Date of Birth',
              Footer: 'Date of Birth',
              accessor: 'date_of_birth',
              Cell: ({ value }) => {
                return format(new Date(value), 'dd/MM/yyyy');
              },
              Filter: TableFilterRow,
            },
            {
              Header: 'Country',
              Footer: 'Country',
              accessor: 'country',
              Filter: TableFilterRow,
            },
            {
              Header: 'Phone',
              Footer: 'Phone',
              accessor: 'phone',
              Filter: TableFilterRow,
            },
          ]}
          data={data ?? []}
          //updateMyData={updateMyData}
        />

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
