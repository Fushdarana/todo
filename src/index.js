import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './components/Main';
import Layout from './components/Layout/Layout';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Layout>
      <Main />
    </Layout>
  </React.StrictMode>
);


