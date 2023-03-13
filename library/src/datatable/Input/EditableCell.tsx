import clsx from 'clsx';
import { useEffect, useState } from 'react';

// Create an editable cell renderer
const EditableCell = ({
  getValue: initialValue,
  row: { index },
  column: { id },
  recordValue,
  editable = true,
}: {
  getValue(): string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  row: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  column: any;
  recordValue: (id: string, index: number, value: string) => void;
  editable?: boolean;
}) => {
  // We need to keep and update the state of the cell normally
  const [value, setValue] = useState(initialValue());

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
    setValue(initialValue());
  }, [initialValue()]);

  const classes = clsx(
    'block p-2 pl-10 ml-[20px] text-sym-secondary-gray dark:text-sym-secondary-gray-dark border border-sym-border dark:border-sym-border-dark focus:ring-sym-primary dark:focus:ring-sym-primary-dark focus:border-sym-primary dark:focus:border-sym-primary-dark bg-sym-layout dark:bg-sym-layout-dark  placeholder-sym-placeholder dark:placeholder-sym-placeholder-dark  font-Raleway text-base',
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
