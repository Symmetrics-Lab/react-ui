import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Loading } from '@symlab/react-ui';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <Router>
          <Suspense fallback={<Loading />}>
            <App />
          </Suspense>
      </Router>
  </React.StrictMode>,
);
