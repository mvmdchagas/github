import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import App2 from './components/App2';
import App3 from './components/App3';
import App4 from './components/App4';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App4 title="titulo">
      conteudo
    </App4>
  </React.StrictMode>
);
reportWebVitals();
