import { forwardRef, useEffect, useMemo } from 'react';
import {
  useGlobalFilter,
  useFilters,
  useSortBy,
  usePagination,
  useRowSelect,
  useTable,
} from 'react-table';
import { TableProps } from './Table.types';
import clsx from 'clsx';
import { TableFilterGlobal } from '../Filter/TableFilterGlobal';
import { Checkbox } from '../Checkbox.tsx';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Table = forwardRef(function Table(props: TableProps, ref) {
  const {
    className,
    title,
    columns: lcolumns,
    data: ldata /*, TableBody, TableCell, TableRow*/,
    options,
  } = props;

  const columns = useMemo(() => lcolumns, []);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const data = useMemo(() => ldata, []);

  const {
    //TABLE
    getTableProps,

    //BODY
    getTableBodyProps,
    prepareRow,
    //rows,

    //FOOTER
    footerGroups,

    //GROUP
    headerGroups,

    //FILTER
    setGlobalFilter,
    state,

    // SELECTION
    selectedFlatRows,

    // HIDING
    //getToggleHideAllColumnsProps,
    //allColumns,
    setHiddenColumns,

    // PAGINATION
    pageOptions,
    gotoPage,
    setPageSize,
    canPreviousPage,
    canNextPage,
    previousPage,
    nextPage,
    pageCount,
    page,
  } = useTable(
    {
      columns,
      data:ldata,

      //EDIT
      autoResetPage: !options?.skipPageReset,
      defaultColumn: {
        minWidth: 30,
        width: 150,
        maxWidth: 400,
      },
    },

    //FILTERS
    useGlobalFilter,
    useFilters,

    //SORTING
    useSortBy,

    //PAGINATION
    usePagination,

    //SELECTION
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => {
        return [
          {
            id: 'Selection',
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            Header: ({ getToggleAllRowsSelectedProps }: any) => (
              <Checkbox {...getToggleAllRowsSelectedProps()} />
            ),
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            Cell: ({ row }: any) => <Checkbox {...row.getToggleRowSelectedProps()} />,
          },
          ...columns,
        ];
      });
    }
  );

  // FILTERS
  const { globalFilter } = state;

  // PAGINATION
  const { pageIndex, pageSize } = state;

  // SELECTION
  //const firstPageRows = page.slice(0, 10);

  //HIDING
  if (options?.hiddenColumns) {
    useEffect(() => {
      setHiddenColumns(options?.hiddenColumns || []);
    }, [options.hiddenColumns]);
  }

  /* eslint-disable */
  return (
    <>
      {title && <div className="darlk:text-white">{title}</div>}
      {/*       <div>
        <div>
          <Checkbox {...getToggleHideAllColumnsProps()} />
        </div>
        {allColumns.map((column) => (
          <div key={column.id}>
            
              <>
                <input type="checkbox" {...column.getToggleHiddenProps()} />
                {column.Header}
              </>
            
          </div>
        ))}
      </div> */}
      {options?.filtering && (
        <TableFilterGlobal filter={globalFilter} setFilter={setGlobalFilter} />
      )}

      <table className={clsx(className)} {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => {
                //SORTING
                const sort = (options?.sorting && column.getSortByToggleProps()) || undefined;
                return (
                  <th key={column.id}>
                    <div className="section-sort" {...column.getHeaderProps(sort)}>
                      {column.render('Header')}
                      {options?.sorting && (
                        <span>{column.isSorted ? (column.isSortedDesc ? ' 🔽' : '🔼') : ''}</span>
                      )}
                    </div>
                    <div className="">{column.canFilter ? column.render('Filter') : null} </div>
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
        {options?.footer && (
          <tfoot className="h-[100px] font-bold">
            {footerGroups.map((footerGroup) => (
              <tr {...footerGroup.getFooterGroupProps()}>
                {footerGroup.headers.map((column, columIndex) => (
                  <td key={columIndex} {...column.getFooterProps}>
                    {column.render('Footer')}
                  </td>
                ))}
              </tr>
            ))}
          </tfoot>
        )}
      </table>

      <div>
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>
        </span>
        <span>
          Go to page:{' '}
          <input
            type={'number'}
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(pageNumber);
            }}
          />
        </span>
        <select
          value={pageSize}
          defaultValue={options?.pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
        >
          {(options?.pageSizeOptions || [10, 25, 50, 100]).map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </button>
        <button
          className="m-5 bg-primary-100"
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        >
          Previous
        </button>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          Next
        </button>
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </button>
      </div>
      <pre className="my-10">
        <code>
          {JSON.stringify(
            {
              selectedFlatRows: selectedFlatRows.map((row) => row.original),
            },
            null,
            2
          )}
        </code>
      </pre>
    </>
  );
});

export default Table;
