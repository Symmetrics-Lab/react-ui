import { Column } from 'react-table';
import { format } from 'date-fns';
import { EditableCell, TableFilterRow } from '@symlab/react-ui';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const COLUMNS: Array<Column<any>> = [
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
      if (!editable) {
        return data.row.original.offeredVolume;
      }

      return (
        <EditableCell
          // eslint-disable-next-line react/destructuring-assignment
          editable
          {...data}
          // updateMyData={updateMyData}
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
];
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const GROUP_COLUMNS: Array<Column<any>> = [
  {
    Header: 'Id',
    Footer: 'Id',
    accessor: 'id',
    Filter: TableFilterRow,
  },
  {
    Header: 'Name',
    Footer: 'Name',
    columns: [
      {
        Header: 'First Name',
        Footer: 'First Name',
        accessor: 'first_name',
      },
      {
        Header: 'Last Name',
        Footer: 'Last Name',
        accessor: 'last_name',
      },
    ],
  },
  {
    Header: 'Info',
    Footer: 'Info',
    columns: [
      {
        Header: 'Date of Birth',
        Footer: 'Date of Birth',
        accessor: 'date_of_birth',
        Cell: ({ value }) => {
          return format(new Date(value), 'dd/MM/yyyy');
        },
      },
      {
        Header: 'Country',
        Footer: 'Country',
        accessor: 'country',
      },
      {
        Header: 'Phone',
        Footer: 'Phone',
        accessor: 'phone',
      },
    ],
  },
];
