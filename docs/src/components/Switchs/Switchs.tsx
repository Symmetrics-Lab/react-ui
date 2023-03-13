import { Switch } from '@symlab/react-ui';
import { useState } from 'react';
import useDarkSide from '../../hooks/useDarkSide';
import { SunIcon, MoonIcon } from '@heroicons/react/20/solid';
export default function Switchs() {
  const { colorTheme, setTheme } = useDarkSide();
  const [darkSide, setDarkSide] = useState(colorTheme === 'light');

  /* eslint-disable @typescript-eslint/no-unused-vars */
  const toggleDarkMode = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setTheme(colorTheme);
    setDarkSide(!darkSide);
  };

  return (
    <div className='absolute right-0 mr-10'>
      <Switch
        id="switch"
        toggle={darkSide}
        onClick={toggleDarkMode}
        size="sm"
        iconLeft={SunIcon}
        iconRight={MoonIcon}
        className={''}
      />
    </div>
  );
}
