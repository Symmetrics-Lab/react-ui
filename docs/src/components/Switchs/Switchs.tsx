import { Switch } from '@symlab/react-ui';
import { useState } from 'react';
import useDarkSide from '../../hooks/useDarkSide';

export default function Switchs() {
  const { colorTheme, setTheme } = useDarkSide();
  const [darkSide, setDarkSide] = useState(colorTheme === 'light');

  /* eslint-disable @typescript-eslint/no-unused-vars */
  const toggleDarkMode = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setTheme(colorTheme);
    setDarkSide(!darkSide);
  };

  return (
    <>
      <Switch id="switch" toggle={darkSide} onClick={toggleDarkMode} size="sm" />
    </>
  );
}
