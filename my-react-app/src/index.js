import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // No es necesario pasar ningún elemento como segundo argumento
  // React se encargará automáticamente de renderizar en el archivo index.html en la carpeta public
  null
);

// Si deseas medir el rendimiento en tu aplicación, puedes dejar esta parte.
reportWebVitals();
