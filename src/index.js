import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/reset.css';
import './styles/index.css';
import { PageContextProvider } from './common/context/PageContext';
import Router from './router';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PageContextProvider>
      <Router />
    </PageContextProvider>
  </React.StrictMode>
);