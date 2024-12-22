import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // render method is used to render your react code into root tag in index,html file
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



