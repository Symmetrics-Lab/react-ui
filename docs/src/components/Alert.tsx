import { Chip } from '@symlab/react-ui';

interface propData {
  code: number;
  message: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setError: any;
}

export default function Alert(prop: propData) {
  const { code, message, setError } = prop;
  return (
    <>
      <Chip  className="w-full text-center py-4 lg:px-4 bg-sym-secondary-error dark:border dark:border-sym-secondary-error-dark">
        <div
          className="p-2 items-center leading-none rounded-full inline-flex"
          role="alert"
        >
          <span className="flex rounded-full bg-sym-error dark:bg-sym-error-dark uppercase px-2 py-1 text-xs font-bold mr-3  text-white">
            {code}
          </span>
          <span className="font-bold text-sym-error mr-2 text-left flex-auto dark:text-white">
            {message}
          </span>
          <span className="absolute right-0 px-4 py-3" onClick={() => setError(null)}>
            <svg
              className="fill-current h-6 w-6 text-sym-error dark:text-white"
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <title>Close</title>
              <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
            </svg>
          </span>
        </div>
      </Chip>
    </>
  );
}
