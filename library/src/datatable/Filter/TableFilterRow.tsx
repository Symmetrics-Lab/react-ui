import clsx from 'clsx';
import { TableFilterRowProps } from './TableFilterRow.types';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TableFilterRow = (props: TableFilterRowProps) => {
  const { column } = props;
  const { getFilterValue: filterValue, setFilterValue: setFilter } = column;

  const classes = clsx(
    'block p-2 pl-10 text-base text-sym-secondary-gray dark:text-sym-secondary-gray-dark font-light bg-sym-layout dark:bg-sym-layout-dark border-0 border-b-2 border-sym-border dark:border-sym-border-dark focus:border-sym-primary dark:focus:border-sym-primary-dark focus:ring-0 rounded-lg dark:placeholder-sym-placeholder placeholder-sym-placeholder-dark  focus:ring-sym-primary dark:focus:ring-sym-primary-dark',
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
