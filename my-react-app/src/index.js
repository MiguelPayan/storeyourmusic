import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Menu from 'Menu.js'; // Asegúrate de poner la ruta correcta al archivo del menú
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(
  <React.StrictMode>
    <Menu />
  </React.StrictMode>,
  document.getElementById('menu-container')
);

// Si deseas medir el rendimiento en tu aplicación, puedes dejar esta parte.
reportWebVitals();
