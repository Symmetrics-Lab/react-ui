import clsx from 'clsx';
import { TableFilterRowProps } from './TableFilterRow.types';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TableFilterRow = (props: TableFilterRowProps) => {
  const { column } = props;
  const { getFilterValue: filterValue, setFilterValue: setFilter } = column;

  const classes = clsx(
    'block p-2 pl-10 text-base text-gray-700 font-light bg-gray-50 border-0	border-b-2 border-gray-300 focus:border-blue-500 focus:ring-0 rounded-lg dark:bg-gray-800 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500',
    props?.propsInput?.className
  );

  return (
    <>
      <input
        value={filterValue() || ''}
        onChange={(e) => setFilter(e.target.value)}
        type={props?.propsInput?.type || 'text'}
        className={classes}
        placeholder={props?.propsInput?.placeholder || ''}
      />
    </>
  );
};

export default TableFilterRow;
