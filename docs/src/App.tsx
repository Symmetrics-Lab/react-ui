import { Suspense } from 'react';
import * as React from 'react';
import { Loading } from '@symlab/react-ui/src';

const Application = React.lazy(() => import('./app/menu/Application'));

function App(): React.ReactElement {
  return (
    <>
        <Suspense fallback={<Loading />}>
        <Application />
      </Suspense>
    </>
  );
}

export default App;
