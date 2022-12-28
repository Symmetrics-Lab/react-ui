import { useState } from 'react';
import { useAsyncDebounce } from 'react-table';
import 'regenerator-runtime/runtime';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const TableFilterGlobal = ({ filter, setFilter }: any) => {
  // SEARCH AFTER ENTERING
  const [value, setValue] = useState(filter);
  const onChange = useAsyncDebounce((value) => {
    setFilter(value || undefined);
  }, 1000);

  return (
    /*
    <span>
      Search: <input value={filter || ''} onChange={(e) => setFilter(e.target.value)} />
    </span> 
    */

    // SEARCH AFTER ENTERING
    <span>
      Search:{' '}
      <input
        value={value || ''}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
      />
    </span>
  );
};
