import { forwardRef, useEffect, useMemo, useState } from 'react';
import {
  /* useGlobalFilter,
  useFilters,
  useSortBy,
  usePagination,
  useRowSelect,*/
  getSortedRowModel,
  FilterFn,
  getPaginationRowModel,
  getFilteredRowModel,
  getCoreRowModel,
  flexRender,
  useReactTable,
  FilterMeta,
  Column,
  Table as TableReactTable,
} from '@tanstack/react-table';
import { TableProps } from './Table.types';
import clsx from 'clsx';
import { TableFilterGlobal } from '../Filter/TableFilterGlobal';

import {
  ArrowLongDownIcon,
  ArrowLongUpIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/20/solid';
import { Select } from '../../components';

import { RankingInfo, rankItem } from '@tanstack/match-sorter-utils';

interface CustomFilterMeta extends FilterMeta {
  filterComponent: (info: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    column: Column<any, unknown>;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    table?: TableReactTable<any>;
  }) => JSX.Element;
}

declare module '@tanstack/table-core' {
  interface FilterFns {
    fuzzy: FilterFn<unknown>;
  }
  interface FilterMeta {
    itemRank: RankingInfo;
  }
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const fuzzyFilter: FilterFn<any> = (row, columnId, value, addMeta) => {
  // Rank the item
  const itemRank = rankItem(row.getValue(columnId), value);

  // Store the itemRank info
  addMeta({
    itemRank,
  });

  // Return if the item should be filtered in/out
  return itemRank.passed;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Table = forwardRef(function Table(props: TableProps, ref) {
  const [columnVisibility, setColumnVisibility] = useState({});
  //const [sorting, setSorting] = useState<SortingState>([])
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
    //getTableProps,
    getPreFilteredRowModel,

    //HEAD
    getHeaderGroups,

    //BODY
    getRowModel,
    //rows,

    //FOOTER
    //footerGroups,
    getFooterGroups,

    //GROUP
    //headerGroups,

    //FILTER
    setGlobalFilter,
    //getGlobalFilterFn,
    getState,

    // SELECTION,
    getSelectedRowModel,
    //state: { selectedRowIds },

    // HIDING
    //getToggleHideAllColumnsProps,
    //allColumns,

    // PAGINATION
    //pageOptions,
    setPageIndex,
    setPageSize,
    getCanPreviousPage,
    getCanNextPage,
    previousPage,
    nextPage,
    getPageCount,
  } = useReactTable(
    {
      columns,
      data: ldata,
      initialState: {
        pagination: { pageSize: options?.pageSize || 10 },
      },

      /*globalFilterFn: (row, columnId, filterValue) => {
        const safeValue = (() => {
          const value = row.getValue(columnId);
          return typeof value === 'number' ? String(value) : value;
        })();

        return safeValue().toLowerCase().includes(filterValue.toLowerCase());
      },*/
      //EDIT
      //autoResetPage: !options?.skipPageReset,

      //FILTER
      filterFns: {
        fuzzy: fuzzyFilter,
      },

      state: {
        columnVisibility,
        //sorting,
      },

      //FILTER
      /*filterFns: {
        fuzzy: fuzzyFilter,
      },*/

      //SELECTON
      //autoResetHiddenColumns: false, //  <-- stops the rerendering
      //autoResetSortBy: false, //  <-- stops the rerendering

      //HIDING
      globalFilterFn: fuzzyFilter,
      // onRowSelectionChange: options?.getSelection,
      getCoreRowModel: getCoreRowModel(),
      getFilteredRowModel: getFilteredRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
      onColumnVisibilityChange: setColumnVisibility,

      //SORTING
      getSortedRowModel: getSortedRowModel(),
      //onSortingChange: setSorting,
    }

    //FILTERS
    //useGlobalFilter,
    //useFilters,

    //SORTING
    //useSortBy,

    //PAGINATION
    // usePagination,

    //SELECTION
    //useRowSelect,
  );

  // FILTERS
  const { globalFilter } = getState();

  // PAGINATION
  const { pageIndex, pageSize } = getState().pagination;

  // SELECTION
  //const firstPageRows = page.slice(0, 10);

  //HIDING
  if (options?.hiddenColumns) {
    useEffect(() => {
      setColumnVisibility(options?.hiddenColumns || []);
    }, [options.hiddenColumns]);
  }

  const [countSelected, setCountSelected] = useState(getSelectedRowModel().rows.length);
  if (options?.getSelection) {
    useEffect(() => {
      // Bubble up the selection to the parent component
      options?.getSelection && options.getSelection(getSelectedRowModel().rows);
    }, [countSelected]);
  }
  useEffect(() => {
    setCountSelected(getSelectedRowModel().rows.length);
  }, [getSelectedRowModel().rows]);

  /* eslint-disable */
  return (
    <>
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg bg-sym-layout dark:bg-sym-layout-dark p-10 ">
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
                <div className="text-sym-txt-primary dark:text-sym-txt-primary-dark font-Raleway text-xl font-medium">{title}</div>
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
              'w-full text-sm text-left text-sym-txt-primary dark:text-sym-txt-primary-dark min-w-full ',
              className
            )}
          >
            <thead>
              {getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id} className="">
                  {headerGroup.headers.map((header) => {
                    //SORTING

                    return (
                      <th className="py-3" key={header.id}>
                        <ul key={'ul-filter-column-' + header.id}>
                          <li key={'li-sort-column-' + header.id} className="group">
                            {options?.sorting && header.id !== 'Selection' ? (
                              <div
                                {...{
                                  className: clsx(
                                    header.column.getCanSort() ? 'cursor-pointer select-none' : '',
                                    ' text-center'
                                  ),
                                  onClick: header.column.getToggleSortingHandler(),
                                }}
                              >
                                {flexRender(header.column.columnDef.header, header.getContext())}
                                <span
                                  className={`text-sym-txt-primary dark:text-sym-txt-primary-dark text-base font-Raleway font-medium	 ${
                                    header.column.getIsSorted()
                                      ? ''
                                      : 'group-hover:text-opacity-50 dark:group-hover:text-white'
                                  }`}
                                >
                                  {{
                                    asc: (
                                      <ArrowLongUpIcon
                                        className={
                                          /*{header.isSorted
                                      ? 'text-opacity-100 dark:text-white'
                                      : 'text-opacity-0  }*/ `group-hover:text-opacity-50 h-6 w-6 text-sym-secondary-gray dark:text-sym-secondary-gray-dark inline `
                                        }
                                      />
                                    ),
                                    desc: (
                                      <ArrowLongDownIcon
                                        className={
                                          /*{header.isSorted
                                          ? 'text-opacity-100 dark:text-white'
                                          : 'text-opacity-0  }*/ `group-hover:text-opacity-50 h-6 w-6 text-sym-secondary-gray dark:text-sym-secondary-gray-dark  inline `
                                        }
                                      />
                                    ),
                                  }[header.column.getIsSorted() as string] ?? null}
                                </span>
                              </div>
                            ) : (
                              <div className="h-[40px] text-center">
                                <span
                                  className={`text-sym-secondary-gray dark:text-sym-secondary-gray-dark text-base font-Raleway align-top`}
                                >
                                  {flexRender(header.column.columnDef.header, header.getContext())}
                                </span>
                              </div>
                            )}
                          </li>

                          <li key={'li-filter-column-' + header.id}>
                            <div className="section-filter-column h-[40px] ">
                              <div className="inset-y-0 left-0 items-center px-5">
                                {header.column.getCanFilter() &&
                                header.column.columnDef?.meta &&
                                (header.column.columnDef?.meta as CustomFilterMeta)
                                  .filterComponent ? (
                                  (
                                    header.column.columnDef.meta as CustomFilterMeta
                                  ).filterComponent({ column: header.column })
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
              <tbody className="text-center text-sym-secondary-gray dark:text-sym-secondary-gray-dark">
                {getRowModel().rows.map((row) => {
                  return (
                    <tr
                      className="bg-sym-layout border-b dark:bg-sym-layout-dark 
                      border-sym-border dark:border-sym-border-dark hover:bg-sym-hover dark:hover:bg-sym-hover-dark"
                      key={row.id}
                    >
                      {row.getVisibleCells().map((cell) => {
                        return (
                          <td key={cell.id} className="py-2 font-Raleway text-base">
                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
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
                {getFooterGroups().map((footerGroup) => (
                  <tr key={footerGroup.id}>
                    {footerGroup.headers.map((footer, columIndex) => (
                      <td key={columIndex}>
                        {flexRender(footer.column.columnDef.footer, footer.getContext())}
                      </td>
                    ))}
                  </tr>
                ))}
              </tfoot>
            )}
          </table>
        </div>

        <nav
          className="lg:flex flex-row items-center justify-between border-t border-sym-border dark:border-sym-border-dark px-4 py-3 sm:px-6"
          aria-label="Pagination"
        >
          <div className="flex flex-1 justify-between sm:justify-start items-center">
            <div className="w-48 bg-sym-layout dark:bg-sym-layout-dark rounded shadow">
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
          <div className="flex flex-1 justify-between sm:justify-end  items-center">
            <button
              className={`text-4xl px-5 ${
                !getCanPreviousPage()
                  ? 'text-sym-secondary-gray-10 dark:text-sym-secondary-gray-10-dark'
                  : 'text-sym-txt-primary dark:text-sym-txt-primary-dark hover:bg-sym-hover dark:hover:bg-sym-hover-dark'
              }`}
              onClick={(e) => {
                e.preventDefault();
                setPageIndex(0);
              }}
              disabled={!getCanPreviousPage()}
            >
              &laquo;
            </button>

            <button
              onClick={(e) => {
                e.preventDefault();
                previousPage();
              }}
              disabled={!getCanPreviousPage()}
              className={`inline-flex items-center text-xs font-medium rounded-full ${
                !getCanPreviousPage()
                  ? 'text-sym-secondary-gray-10 dark:text-sym-secondary-gray-10-dark'
                  : 'text-sym-txt-primary dark:text-sym-txt-primary-dark hover:bg-sym-hover dark:hover:bg-sym-hover-dark'
              }`}
            >
              <ChevronLeftIcon className="h-9 w-9" aria-hidden="true" />
            </button>

            <div className="px-5">
              <p className="text-sm text-gray-400 dark:text-sym-secondary-gray-10-dark">
                <span className="font-medium">{pageIndex + 1}</span> to{' '}
                <span className="font-medium">{getPageCount()}</span> of{' '}
                <span className="font-medium">{getPreFilteredRowModel().rows.length}</span>
              </p>
            </div>

            <button
              onClick={(e) => {
                e.preventDefault();
                nextPage();
              }}
              disabled={!getCanNextPage()}
              className={`inline-flex items-center text-xs font-medium  rounded-full ${
                !getCanNextPage()
                  ? 'text-sym-secondary-gray-10 dark:text-sym-secondary-gray-10-dark'
                  : 'text-sym-txt-primary dark:text-sym-txt-primary-dark hover:bg-sym-hover dark:hover:bg-sym-hover-dark'
              }`}
            >
              <ChevronRightIcon className="h-9 w-9" aria-hidden="true" />
            </button>

            <button
              onClick={(e) => {
                e.preventDefault();
                setPageIndex(getPageCount() - 1);
              }}
              disabled={!getCanNextPage()}
              className={`text-4xl px-5 ${
                !getCanNextPage()
                  ? 'text-sym-secondary-gray-10 dark:text-sym-secondary-gray-10-dark'
                  : 'text-sym-txt-primary dark:text-sym-txt-primary-dark hover:bg-sym-hover dark:hover:bg-sym-hover-dark'
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
                setPageIndex(pageNumber);
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
