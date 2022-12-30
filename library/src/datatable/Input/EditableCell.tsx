import clsx from 'clsx';
import { useEffect, useState } from 'react';

// Create an editable cell renderer
const EditableCell = ({
  value: initialValue,
  row: { index },
  column: { id },
  recordValue,
  editable = true,
}: {
  value: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  row: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  column: any;
  recordValue: (id: string, index: number, value: string) => void;
  editable?: boolean;
}) => {
  // We need to keep and update the state of the cell normally
  const [value, setValue] = useState(initialValue);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onChange = (e: any) => {
    setValue(e.target.value);
  };

  // We'll only update the external data when the input is blurred
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onBlur = () => {
    recordValue(index, id, value);
  };

  // If the initialValue is changed external, sync it up with our state
  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  const classes = clsx(
    'block p-2 pl-10 ml-[20px] text-gray-500 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 font-Raleway text-base',
    ''
  );
  return (
    <>
      <input
        value={value ?? ''}
        type={'text'}
        className={classes}
        onChange={onChange}
        onBlur={onBlur}
        disabled={!editable}
        placeholder={''}
      />
    </>
  );
};

EditableCell.defaultProps = {
  editable: true,
};

export default EditableCell;
