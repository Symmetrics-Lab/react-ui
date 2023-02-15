import { useForm } from 'react-hook-form';
import {
  Button,
  Table,
  TableFilterRow,
  EditableCell,
  IndeterminateCheckbox,
} from '@symlab/react-ui';
/* import { EnvelopeIcon } from '@heroicons/react/20/solid';
import BasicTable from '../components/datatable/BasicTable';
import SortingTable from '../components/datatable/SortingTable';
import FilteringTable from '../components/datatable/FilteringTable';
import PaginationTable from '../components/datatable/PaginationTable';
import RowSelection from '../components/datatable/RowSelection';
import ColumnHiding from '../components/datatable/ColumnHiding';
import { COLUMNS } from '../components/datatable/columns'; */
import MOCK_DATA from './../data/MOCK_DATA.json';
import { format } from 'date-fns';
import { useCallback, useEffect, useState } from 'react';
import ModalComponent from '../components/Modal';

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
  const [dataSelect, setDataSelection] = useState([]);
  const selectionCallback = useCallback((row: any) => setDataSelection(row), [setDataSelection]);

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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const resetData = (event: any) => {
    event.preventDefault();
    setValue('person', MOCK_DATA);
    setData(MOCK_DATA);
  };
  return (
    <>
      <section className="bg-gray-50 py-8 dark:bg-gray-900">
        < ModalComponent/>
       
        <div className="flex flex-col items-center justify-center px-6 py-0 mx-auto h-full lg:py-0">
          {/*  <BasicTable/> */}
          {/* <SortingTable /> */}
          {/*   <FilteringTable /> */}
          {/*   <PaginationTable /> */}
          {/* <RowSelection/> */}
          {/* <ColumnHiding /> */}
          <div className="w-full h-full bg-gray-700 border rounded-lg shadow dark:border  xl:p-0 dark:bg-gray-600 dark:border-gray-700">
            <form className="" onSubmit={handleSubmit(onSubmit)}>
              <div className="p-10">
                <div className="flex text-3xl	text-white justify-between my-10">
                  <p className="font-medium">Listado</p>

                  <div className="flex flex-1 justify-between sm:justify-end items-center">
                    <Button
                      onClick={resetData}
                      className="px-4 py-2 bg-gray-100  hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md focus:ring-0 focus:ring-offset-0 "
                    >
                      Reset Filter
                    </Button>
                    <Button
                      type="submit"
                      className="ml-4 text-white 
              bg-gradient-to-b from-symlab-purple-300 to-blue-400
              hover:from-symlab-purple-300 hover:to-symlab-purple-300
              border-none
              hover:bg-symlab-purple-200  
              dark:hover:bg-symlab-purple-300 
              focus:outline-none 
              font-medium rounded-lg text-sm py-2.5 text-center 
              focus:ring-0 focus:ring-offset-0
              "
                    >
                      Submit
                    </Button>
                  </div>
                </div>

                <Table
                  {...register}
                  ref={register}
                  title="Detalle de las personas"
                  options={{
                    filtering: true,
                    sorting: true,
                    footer: true,
                    selection: true,
                    getSelection: selectionCallback,
                    //pageSize: 10,
                    pageSizeOptions: [10, 100, 500, 1000],
                    // hiddenColumns: ['country'],
                    skipPageReset,
                  }}
                  columns={[
                    {
                      id: 'select',
                      header: ({ table }: any) => (
                        <IndeterminateCheckbox
                          {...{
                            checked: table.getIsAllRowsSelected(),
                            indeterminate: table.getIsSomeRowsSelected(),
                            onChange: table.getToggleAllRowsSelectedHandler(),
                          }}
                        />
                      ),
                      cell: ({ row }: any) => (
                        <div className="px-1">
                          <IndeterminateCheckbox
                            {...{
                              checked: row.getIsSelected(),
                              indeterminate: row.getIsSomeSelected(),
                              onChange: row.getToggleSelectedHandler(),
                            }}
                          />
                        </div>
                      ),
                    },
                    {
                      header: 'Id',
                      footer: 'Id',
                      accessorKey: 'id',
                      cell: (info) => info.getValue(),
                    },
                    {
                      header: 'First Name',
                      footer: 'First Name',
                      accessorKey: 'first_name',
                      filterFn: 'includesString',

                      // eslint-disable-next-line @typescript-eslint/no-explicit-any
                      cell: (data: any) => {
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
                      meta: {
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        filterComponent: (data: any) => {
                          return <TableFilterRow propsInput={{ className: '' }} {...data} />;
                        },
                      },
                    },
                    {
                      header: 'Last Name',
                      footer: 'Last Name',
                      accessorKey: 'last_name',
                      filterFn: 'includesString',
                      meta: {
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        filterComponent: (data: any) => {
                          return <TableFilterRow propsInput={{ className: '' }} {...data} />;
                        },
                      },
                    },
                    {
                      header: 'Date of Birth',
                      footer: 'Date of Birth',
                      accessorKey: 'date_of_birth',
                      cell: ({ getValue }) => {
                        return format(new Date(getValue()), 'dd/MM/yyyy');
                      },

                      filterFn: 'includesString',
                      meta: {
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        filterComponent: (data: any) => {
                          return <TableFilterRow propsInput={{ className: '' }} {...data} />;
                        },
                      },
                    },
                    {
                      header: 'Country',
                      footer: 'Country',
                      accessorKey: 'country',
                      filterFn: 'includesString',
                    },
                    {
                      header: 'Phone',
                      footer: 'Phone',
                      accessorKey: 'phone',
                      filterFn: 'includesString',
                      meta: {
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        filterComponent: (data: any) => {
                          return <TableFilterRow propsInput={{ className: '' }} {...data} />;
                        },
                      },
                    },
                  ]}
                  data={data ?? []}
                  localization={{
                    body: {
                      emptyDataSourceMessage: 'No existe coincidencia',
                    },
                  }}

                  //updateMyData={updateMyData}
                />

                <pre className="my-10 text-white">
                  <code>
                    {JSON.stringify(
                      {
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        selectedFlatRows: dataSelect?.map((row: any) => row?.original),
                      },
                      null,
                      2
                    )}
                  </code>
                </pre>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
