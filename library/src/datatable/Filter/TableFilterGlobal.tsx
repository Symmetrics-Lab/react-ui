import { useEffect, useState } from 'react';
//import { useAsyncDebounce } from '@tanstack/react-table';
//import 'regenerator-runtime/runtime';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const TableFilterGlobal = ({ filter, setFilter }: any) => {
  // SEARCH AFTER ENTERING
  const [value, setValue] = useState(filter);
  /*const onChange = useAsyncDebounce((value) => {
    setFilter(value || undefined);
  }, 1000);*/

  useEffect(() => {
    setValue(filter);
  }, [filter]);

  useEffect(() => {
    const onChange = setTimeout(() => {
      setFilter(value || undefined);
    }, 1000);

    return () => clearTimeout(onChange);
  }, [value]);

  return (
    /*
    <span>
      Search: <input value={filter || ''} onChange={(e) => setFilter(e.target.value)} />
    </span> 
    */

    // SEARCH AFTER ENTERING
    <>
      <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
        <svg
          className="w-5 h-5 text-gray-500 dark:text-gray-400"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clipRule="evenodd"
          ></path>
        </svg>
      </div>
      <input
        value={value || ''}
        onChange={(e) => {
          setValue(e.target.value);
          //onchange(e.target.value);
        }}
        type="text"
        id="table-search"
        className="block p-2 pl-10 w-80 
        text-sym-secondary-gray 
        dark:text-sym-secondary-gray-dark 
        bg-sym-layout 
        dark:bg-sym-layout-dark
        rounded-lg border-0 border-b-2 
        border-sym-border 
        dark:border-sym-border-dark 
        focus:ring-0 
        focus:ring-sym-primary 
        dark:focus:ring-sym-primary-dark 
        focus:border-sym-primary
        dark:focus:border-sym-primary-dark 
        placeholder-sym-placeholder 
        dark:placeholder-sym-placeholder-dark font-Raleway text-base"
        placeholder="Search"
      ></input>
    </>
  );
};
