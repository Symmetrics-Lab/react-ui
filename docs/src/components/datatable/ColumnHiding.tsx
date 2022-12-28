import { useMemo } from 'react';
import { useTable } from 'react-table';
import MOCK_DATA from '../../data/MOCK_DATA.json';
import { Checkbox } from './Checkbox';
import { COLUMNS, GROUP_COLUMNS } from './columns';

export default function ColumnHiding() {
  //const columns = useMemo(() => COLUMNS, []);
  const columns = useMemo(() => GROUP_COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);
  const tableInstance = useTable({
    columns,
    data,
  });

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow,
    allColumns,
    getToggleHideAllColumnsProps,
  } = tableInstance;
  /* eslint-disable */
  return (
    <>
      <div>
        <div>
          <Checkbox {...getToggleHideAllColumnsProps()} />
        </div>
        {allColumns.map((column) => (
          <div key={column.id}>
            <label>
              <>
                <input type="checkbox" {...column.getToggleHiddenProps()} />
                {column.Header}
              </>
            </label>
          </div>
        ))}
      </div>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}> {column.render('Header')} </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
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
        <tfoot>
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
      </table>
    </>
  );
}
