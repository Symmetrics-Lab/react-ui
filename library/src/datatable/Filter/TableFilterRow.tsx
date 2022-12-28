// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TableFilterRow = ({ column }: any) => {
  const { filterValue, setFilter } = column;
  return (
    <span>
      Search: <input value={filterValue || ''} onChange={(e) => setFilter(e.target.value)} />
    </span>
  );
};

export default TableFilterRow;