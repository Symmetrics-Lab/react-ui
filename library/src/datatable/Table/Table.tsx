import { forwardRef, useEffect, useMemo, useState } from 'react';
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

import {
  ArrowLongUpIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/20/solid';
import { Select } from '../../components';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Table = forwardRef(function Table(props: TableProps, ref) {
  const {
    className,
    title,
    columns: lcolumns,
    data: ldata /*, TableBody, TableCell, TableRow*/,
    options,
    localization,
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
    //state: { selectedRowIds },

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
      data: ldata,

      //EDIT
      autoResetPage: !options?.skipPageReset,
      defaultColumn: {
        minWidth: 30,
        width: 150,
        maxWidth: 400,
      },

      //SELECTON
      //autoResetHiddenColumns: false, //  <-- stops the rerendering
      //autoResetSortBy: false, //  <-- stops the rerendering 🥳
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
      options?.selection &&
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

  const [countSelected, setCountSelected] = useState(selectedFlatRows.length);
  if (options?.getSelection) {
    useEffect(() => {
      // Bubble up the selection to the parent component
      options?.getSelection && options.getSelection(selectedFlatRows);
    }, [countSelected]);
  }
  useEffect(() => {
    setCountSelected(selectedFlatRows.length);
  }, [selectedFlatRows]);

  /* eslint-disable */
  return (
    <>
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg bg-white dark:bg-gray-800 p-10">
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
          <div className="flex justify-between items-center pb-20">
            <div>
              {title && (
                <div className="dark:text-white font-Raleway text-xl font-medium">{title}</div>
              )}
            </div>
            <label className="sr-only">Search</label>
            <div className="relative">
              <TableFilterGlobal filter={globalFilter} setFilter={setGlobalFilter} />
            </div>
          </div>

          /*     
          <div>
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
            <TableFilterGlobal filter={globalFilter} setFilter={setGlobalFilter} />
          </div>
        </div> */
        )}
        <div className="overflow-x-auto">
          <table
            className={clsx(
              'w-full text-sm text-left text-gray-500 dark:text-gray-400 min-w-full',
              className
            )}
            {...getTableProps()}
          >
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()} className="dark:bg-gray-700">
                  {headerGroup.headers.map((column) => {
                    //SORTING
                    const sort = (options?.sorting && column.getSortByToggleProps()) || undefined;
                    return (
                      <th className="py-3" key={column.id}>
                        <ul key={'ul-filter-column-' + column.id}>
                          <li key={'li-sort-column-' + column.id} className="group">
                            {options?.sorting && column.id !== 'Selection' ? (
                              <div
                                className="h-[40px] text-center ml-[-20px]"
                                {...column.getHeaderProps(sort)}
                              >
                                <span
                                  className={`text-gray-800 dark:text-gray-300 text-base font-Raleway font-medium	 ${
                                    column.isSorted
                                      ? ''
                                      : 'group-hover:text-opacity-50 dark:group-hover:text-white'
                                  }`}
                                >
                                  <ArrowLongUpIcon
                                    className={`${
                                      column.isSorted
                                        ? 'text-opacity-100 dark:text-white'
                                        : 'text-opacity-0  group-hover:text-opacity-50'
                                    } h-6 w-6 text-gray-500  inline ${
                                      column.isSortedDesc &&
                                      'transform rotate-180 transition duration-300 ease-in-out'
                                    }`}
                                  />
                                  {column.render('Header')}
                                </span>
                              </div>
                            ) : (
                              <div className="h-[40px] text-center">
                                <span
                                  className={`text-gray-800 dark:text-gray-200 text-base font-Raleway align-top`}
                                >
                                  {column.render('Header')}
                                </span>
                              </div>
                            )}
                          </li>

                          <li key={'li-filter-column-' + column.id}>
                            <div className="section-filter-column h-[40px] ">
                              <div className="inset-y-0 left-0 items-center px-5">
                                {column.canFilter ? (
                                  column.render('Filter')
                                ) : (
                                  <div className="h-[60px]"></div>
                                )}
                              </div>
                            </div>
                          </li>
                        </ul>
                      </th>
                    );
                  })}
                </tr>
              ))}
            </thead>
            {ldata.length > 0 ? (
              <tbody className="text-center dark:text-gray-400" {...getTableBodyProps()}>
                {page.map((row, index) => {
                  prepareRow(row);
                  return (
                    <tr
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                      {...row.getRowProps()}
                    >
                      {row.cells.map((cell) => {
                        return (
                          <td className="py-2 font-Raleway text-base" {...cell.getCellProps()}>
                            {cell.render('Cell')}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            ) : (
              localization?.body?.emptyDataSourceMessage
            )}

            {options?.footer && (
              <tfoot className="h-[100px] text-sm font-Raleway text-center font-semibold">
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
        </div>

        <nav
          className="lg:flex flex-row items-center justify-between border-t border-gray-200 px-4 py-3 sm:px-6"
          aria-label="Pagination"
        >
          <div className="flex flex-1 justify-between sm:justify-start items-center">
            <div className="w-48 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
              <Select
                id="select-show-row"
                value={pageSize}
                defaultValue={options?.pageSize}
                options={options?.pageSizeOptions || [10, 25, 50, 100]}
                auxOption="rows"
                className="border-none !shadow-none"
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                  setPageSize(Number(e.target.value));
                }}
              />
            </div>
          </div>
          <div className="flex flex-1 justify-between sm:justify-end items-center">
            <button
              className={`text-4xl px-5 ${
                !canPreviousPage
                  ? 'text-gray-300 dark:text-gray-500'
                  : 'text-gray-700 dark:text-gray-200'
              }`}
              onClick={() => gotoPage(0)}
              disabled={!canPreviousPage}
            >
              &laquo;
            </button>

            <button
              onClick={(e) => {
                e.preventDefault();
                previousPage();
              }}
              disabled={!canPreviousPage}
              className={`inline-flex items-center text-xs font-medium rounded-full ${
                !canPreviousPage
                  ? 'text-gray-300 dark:text-gray-500'
                  : 'text-gray-700 dark:text-gray-200 hover:bg-gray-300'
              }`}
            >
              <ChevronLeftIcon className="h-9 w-9" aria-hidden="true" />
            </button>

            <div className="px-5">
              <p className="text-sm text-gray-400 dark:text-gray-500">
                <span className="font-medium">{pageIndex + 1}</span> of{' '}
                <span className="font-medium">{pageOptions.length}</span>
              </p>
            </div>

            <button
              onClick={(e) => {
                e.preventDefault();
                nextPage();
              }}
              disabled={!canNextPage}
              className={`inline-flex items-center text-xs font-medium  rounded-full ${
                !canNextPage
                  ? 'text-gray-300 dark:text-gray-500'
                  : 'text-gray-700 dark:text-gray-200 hover:bg-gray-300'
              }`}
            >
              <ChevronRightIcon className="h-9 w-9" aria-hidden="true" />
            </button>

            <button
              onClick={() => gotoPage(pageCount - 1)}
              disabled={!canNextPage}
              className={`text-4xl px-5 ${
                !canNextPage
                  ? 'text-gray-300 dark:text-gray-500'
                  : 'text-gray-700 dark:text-gray-200'
              }`}
            >
              &raquo;
            </button>
          </div>
          {/* <span>
            Go to page:{' '}
            <input
              type={'number'}
              defaultValue={pageIndex + 1}
              onChange={(e) => {
                const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0;
                gotoPage(pageNumber);
              }}
            />
          </span> */}
        </nav>
      </div>
      {/* <pre className="my-10">
          <code>
            {JSON.stringify(
              {
                selectedFlatRows: selectedFlatRows?.map((row:any) => row?.original),
              },
              null,
              2
            )}
          </code>
        </pre> */}
    </>
  );
});

export default Table;
