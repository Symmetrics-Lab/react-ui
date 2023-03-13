import React, { useEffect, useState } from 'react';
import { Select, Listbox } from  '@symlab/react-ui';;

type optionsType = { label: string; value: string };
const options: optionsType[] = [
  { label: 'Selecciones una opción', value: '' },
  { label: 'Prueba 1', value: '1' },
  { label: 'Prueba 2', value: '2' },
  { label: 'Prueba 3', value: '3' },
  { label: 'Prueba 4', value: '4' },
];
type peopleType = { name: string; id: number };
const people: peopleType[] = [
  { id: 0, name: 'Seleccione una persona' },
  { id: 1, name: 'Wade Cooper' },
  { id: 2, name: 'Arlene Mccoy' },
  { id: 3, name: 'Devon Webb' },
  { id: 4, name: 'Tom Cook' },
  { id: 5, name: 'Tanya Fox' },
  { id: 6, name: 'Hellen Schmidt' },
  { id: 7, name: 'Caroline Schultz' },
  { id: 8, name: 'Mason Heaney' },
  { id: 9, name: 'Claudie Smitham' },
  { id: 10, name: 'Emil Schaefer' },
];

const Selects = (): JSX.Element => {
  const [selectedOption, setSelectedOption] = useState<optionsType>();
  const [selectedPerson, setSelectedPerson] = useState<peopleType>(people[2]);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selection = options?.find((i) => i.value === event.target.value);
    setSelectedOption(selection || { label: '', value: '' });
  };



  return (
    <>
      <h1 className='text-3xl'>Selects</h1>
      <h1 className='text-xl mt-2'>Active</h1>
      <div className='flex flex-row flex-wrap sm:w-6/12 md:w-4/12'>
        <div className='flex-1 mx-1'>
          <Select id='id' value={selectedOption?.value} options={options} onChange={handleChange} />
        </div>
      </div>
      <h1 className='text-xl mt-2'>Disabled</h1>
      <div className='flex flex-row flex-wrap sm:w-6/12 md:w-4/12'>
        <div className='flex-1 mx-1'>
          <Select id='id' value={selectedOption?.value || ''} options={options} onChange={handleChange} disabled />
        </div>
      </div>

      <h1 className='text-xl mt-2'>ListBox</h1>
      <h1 className='text-l mt-2'>Active</h1>
      <div className='flex flex-row flex-wrap sm:w-6/12 md:w-4/12'>
        <div className='flex-1 mx-1'>
          <Listbox
            onForm={false}
            value={{ labelField: 'name', data: selectedPerson }}
            setValue={setSelectedPerson}
            options={people}
            id='peoplelist'
            name='peoplelist'
          />
        </div>
      </div>
      <h1 className='text-l mt-2'>Disabled</h1>
      <div className='flex flex-row flex-wrap sm:w-6/12 md:w-4/12'>
        <div className='flex-1 mx-1'>
          <Listbox
            onForm={false}
            value={{ labelField: 'name', data: selectedPerson }}
            id='peopleListDisabled'
            name='peopleListDisabled'
            setValue={setSelectedPerson}
            options={people}
            disabled
          />
        </div>
      </div>
    </>
  );
};

export default Selects;
