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

  return (
    <div className="w-[150px] flex justify-center items-center ml-2 text-sm">
      <input
        className="text-center"
        type="text"
        value={value ?? ''}
        onChange={onChange}
        onBlur={onBlur}
        disabled={!editable}
      />
    </div>
  );
};

EditableCell.defaultProps = {
  editable: true,
};

export default EditableCell;
